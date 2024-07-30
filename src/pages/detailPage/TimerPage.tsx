import React, { useEffect, useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { styles } from "../../styles/detail/TimerPageStyle";
import BackTextHeader from "../../components/header/BackTextHeader";
import { Color } from "../../styles/Theme";

const TimerPage = ({ navigation }: { navigation: any }) => {
  const [isRunning, setIsRunning] = useState(false); //타이머 작동 여부
  const [time, setTime] = useState(0); //현재 타이머 시간
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [records, setRecords] = useState<
    { date: string; time: string; duration: string }[]
  >([]); //기록된 타이머 정보
  const [accumulatedTime, setAccumulatedTime] = useState(0); //누적 독서 시간

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

  //시간 형식 HH:MM:SS으로 포맷팅
  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  //날짜 형식 YYYY.MM.DD으로 포맷팅
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  //시간을 HH시 MM분 형식으로 포맷팅
  const formatTimeWithKorean = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}시 ${minutes}분`;
  };

  //시작, 중지 버튼 클릭 핸들러
  const handleStartStop = () => {
    if (isRunning) {
      const now = new Date();
      const newRecord = {
        date: formatDate(now),
        time: formatTimeWithKorean(now),
        duration: formatTime(time),
      };
      setRecords((prevRecords) => {
        const updatedRecords = [newRecord, ...prevRecords];
        return updatedRecords.length > 10
          ? updatedRecords.slice(0, 10)
          : updatedRecords;
      });
      setAccumulatedTime((prevAccumulatedTime) => prevAccumulatedTime + time);
    } else {
      setTime(0);
    }
    setIsRunning(!isRunning);
  };

  return (
    <View style={styles.container}>
      <BackTextHeader title="타이머" />
      <View>
        <Text style={styles.timeText}>{formatTime(time)}</Text>
        <View style={styles.betweenWrap}>
          <View>
            <Text style={styles.accumulatedHeadText}>누적 독서 시간</Text>
            <Text style={styles.accumulatedText}>
              {formatTime(accumulatedTime)}
            </Text>
          </View>
          <Pressable
            style={[
              styles.timerButton,
              {
                backgroundColor: isRunning
                  ? Color.Contents.Click
                  : Color.Click[100],
              },
            ]}
            onPress={handleStartStop}
          >
            <Text
              style={[
                styles.timerText,
                {
                  color: isRunning ? Color.Secondary : Color.Typo.Primary,
                },
              ]}
            >
              {isRunning ? "중단" : "시작"}
            </Text>
          </Pressable>
        </View>
        <ScrollView>
          {records.map((record, index) => (
            <View key={index} style={styles.recordWrap}>
              <View>
                <Text style={styles.recordDateText}>{record.date}</Text>
                <Text style={styles.recordTimeText}>{record.time}</Text>
              </View>
              <Text style={styles.recordDurationText}>{record.duration}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default TimerPage;
