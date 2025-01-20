import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { styles } from "../../styles/detail/TimerPageStyle";
import BackTextHeader from "../../components/header/BackTextHeader";
import { Color } from "../../styles/Theme";
import { useFocusEffect } from "@react-navigation/native";
import { getTimerList } from "../../api/book/getTimerList";
import { TTimerListInformationRes } from "../../types/timer";
import { postTimer } from "../../api/book/postTimer";

const TimerPage = ({ route }: { route: any }) => {
  const bookId = route?.params?.bookId;
  const [timerList, setTimerList] = useState<TTimerListInformationRes>();

  const [isRunning, setIsRunning] = useState(false); //타이머 작동 여부
  const [time, setTime] = useState(0); //현재 타이머 시간
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const fetchTimerList = async () => {
    try {
      const response = await getTimerList(bookId);
      if (response?.check) {
        setTimerList(response.information);
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchTimerList();
    }, [])
  );

  //타이머 작동 및 정지 관리
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(interval);
    } else if (!isRunning && intervalId) {
      clearInterval(intervalId);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  //시간 형식 HH:MM:SS으로 변환
  const formatTimer = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  //시간 형식 nn시 nn분으로 변환
  const formatTime = (dateString: string | undefined) => {
    if (!dateString) return "";

    const [hour, minutes] = dateString.split(":");
    return `${parseInt(hour)}시 ${parseInt(minutes)}분`;
  };

  //시작, 중지 버튼 클릭 핸들러
  const handleStartStop = async () => {
    if (isRunning) {
      const response = await postTimer(bookId, time);
      if (response.check) {
        fetchTimerList();
        setTime(0);
      }
    } else {
      setTime(0);
    }
    setIsRunning(!isRunning);
  };

  return (
    <View style={styles.container}>
      <BackTextHeader title="타이머" />
      <View style={styles.contentContainer}>
        <Text style={styles.timeText}>
          {formatTimer(time).replaceAll(":", " : ")}
        </Text>
        <View style={styles.betweenWrap}>
          <View>
            <Text style={styles.accumulatedHeadText}>누적 독서 시간</Text>
            <Text style={styles.accumulatedText}>
              {timerList?.totalReadTime.replaceAll(":", " : ")}
            </Text>
          </View>
          <Pressable
            style={[
              styles.timerButton,
              {
                backgroundColor: isRunning
                  ? Color.NegativeTransparent
                  : Color.PositiveTransparent,
              },
            ]}
            onPress={handleStartStop}
          >
            <Text
              style={[
                styles.timerText,
                {
                  color: isRunning ? Color.Negative : Color.Positive,
                },
              ]}
            >
              {isRunning ? "중단" : "시작"}
            </Text>
          </Pressable>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {timerList?.recordResList.map((record, index) => (
            <View key={index} style={styles.recordWrap}>
              <View>
                <Text style={styles.recordDateText}>
                  {record.date.replaceAll("-", ".")}
                </Text>
                <Text style={styles.recordTimeText}>
                  {formatTime(record.time)}
                </Text>
              </View>
              <Text style={styles.recordDurationText}>
                {record.readTime.replaceAll(":", " : ")}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default TimerPage;
