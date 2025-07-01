import React, { useCallback, useState } from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { styles } from "../../styles/challenge/StatusCardDetailPageStyle";
import BackTitleHeader from "../../components/header/BackTitleHeader";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import ArrowLeftIcon from "../../assets/images/challange/ArrowLeft.svg";
import ArrowRightIcon from "../../assets/images/challange/ArrowRight.svg";
import { Color, Font } from "../../styles/Theme";
import { getCalendar } from "../../api/challenge/getCalendar";
import { TCalendarRes } from "../../types/challenge";
import { useFocusEffect } from "@react-navigation/native";
import { getMyCalendar } from "../../api/userBook/getMyCalendar";

LocaleConfig.locales["ko"] = {
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  monthNamesShort: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  today: "오늘",
};

LocaleConfig.defaultLocale = "ko";

export default function StatusCardDetailPage({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { clickStatus, isCurrentUser } = route.params;

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState<{
    year: number;
    month: number;
  }>({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
  });
  const [selectedDate, setSelectedDate] = useState<{
    year: number;
    month: number;
    day: number;
    week: number;
  }>({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
    week: today.getDay(),
  });
  const [detail, setDetail] = useState<TCalendarRes[]>([]);

  const getDayName = (dayNumber: number) => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    return days[dayNumber];
  };

  const fetchChallengeDetail = async () => {
    try {
      const response = await getCalendar(
        clickStatus.participantId,
        `${selectedDate.year}-${selectedDate.month.toString().padStart(2, "0")}`
      );
      if (response) {
        setDetail(response);
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  const fetchMyChallengeDetail = async () => {
    try {
      const response = await getMyCalendar(
        `${selectedDate.year}-${selectedDate.month.toString().padStart(2, "0")}`
      );
      if (response) {
        setDetail(response);
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (isCurrentUser) {
        fetchMyChallengeDetail();
      } else {
        fetchChallengeDetail();
      }
    }, [selectedDate.year, selectedDate.month])
  );

  const selectedDateString = `${selectedDate.year}-${selectedDate.month
    .toString()
    .padStart(2, "0")}-${selectedDate.day.toString().padStart(2, "0")}`;

  const selectedDetail = detail.find(
    (item) => item.date === selectedDateString
  );

  const formatTime = (time: string | null) => {
    if (!time) return "";
    const [hour, minute] = time.split(":");
    return `${hour}시 ${minute}분`;
  };

  const CustomDayComponent = ({ date }: { date?: DateData }) => {
    if (!date) return null;

    const isSameMonth =
      date.month === currentMonth.month && date.year === currentMonth.year;
    const textColor = isSameMonth ? Color.Typo.Primary : "transparent";
    const isMarked =
      date.month === selectedDate.month &&
      date.year === selectedDate.year &&
      date.day === selectedDate.day;

    const dayDate = new Date(date.year, date.month - 1, date.day);

    return (
      <Pressable
        style={{
          width: 44,
          height: 44,
          marginBottom: -10,
          backgroundColor:
            isSameMonth && isMarked ? Color.Click[300] : "transparent",
          borderRadius: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          setSelectedDate({
            year: date.year,
            month: date.month,
            day: date.day,
            week: dayDate.getDay(),
          });
        }}
        disabled={!isSameMonth}
      >
        <Text style={{ ...Font.Label.SemiMedium, color: textColor }}>
          {date.day}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <BackTitleHeader
        navigation={navigation}
        title={isCurrentUser ? "독서 캘린더" : clickStatus?.nickname}
        isTitleVisible={true}
      />
      <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
        <Text style={styles.headText}>독서량 달력</Text>
        <View style={styles.calendarWrap}>
          <View style={styles.calendar}>
            <Calendar
              onMonthChange={(month: any) => {
                setCurrentMonth({ month: month.month, year: month.year });
              }}
              monthFormat={"yyyy년 MM월"} //월 형식 설정
              firstDay={1} //한 주의 시작 요일 설정 (월요일)
              theme={{
                calendarBackground: "transparent",
                textSectionTitleColor: Color.Typo.Primary,
                dayTextColor: Color.Typo.Primary,
                monthTextColor: Color.Typo.Primary,
                arrowColor: Color.Typo.Primary,
                textDayHeaderFontFamily: "SCDream5",
                textDayHeaderFontSize: 14,
              }} //테마 설정
              renderHeader={(date: any) => {
                return (
                  <Text
                    style={{
                      ...Font.Label.Medium,
                      color: Color.Typo.Primary,
                      marginBottom: 8,
                    }}
                  >
                    {date.toString("yyyy년 M월")}
                  </Text>
                );
              }} //헤더 커스텀 렌더링
              renderArrow={(direction: any) => {
                if (direction === "left") {
                  return (
                    <ArrowLeftIcon
                      style={{
                        marginBottom: 10,
                        marginLeft: 55,
                      }}
                    />
                  );
                } else {
                  return (
                    <ArrowRightIcon
                      style={{
                        marginBottom: 10,
                        marginRight: 55,
                      }}
                    />
                  );
                }
              }} //화살표 커스텀 렌더링
              dayComponent={CustomDayComponent} //날짜 셀 커스텀 렌더링
            />
          </View>
          {selectedDetail && (
            <View style={styles.dateWrap}>
              <Text style={styles.dateText}>
                {selectedDate.month}월 {selectedDate.day}일 (
                {getDayName(selectedDate.week)})
              </Text>
              <View>
                <Text style={styles.dateItemHeadText}>총 독서 시간</Text>
                <Text style={styles.dateItemText}>
                  {selectedDetail.dailyUserBookCalendar.totalReadTime.replaceAll(
                    ":",
                    " : "
                  ) || "00 : 00 : 00"}
                </Text>
              </View>
              <View style={styles.dateItemWrap}>
                <View>
                  <Text style={styles.dateItemHeadText}>시작 시간</Text>
                  <Text style={styles.dateItemText}>
                    {formatTime(selectedDetail.dailyUserBookCalendar.startTime)}
                  </Text>
                </View>
                <View>
                  <Text style={styles.dateItemHeadText}>종료 시간</Text>
                  <Text style={styles.dateItemText}>
                    {formatTime(selectedDetail.dailyUserBookCalendar.endTime)}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={styles.dateItemHeadText}>읽은 책</Text>
                <View style={styles.dateBookWrap}>
                  {selectedDetail.dailyUserBookCalendar.bookList.map(
                    (item, index) => {
                      return (
                        <View style={styles.dateBookItemWrap} key={index}>
                          <View>
                            <Image
                              source={{ uri: item.image }}
                              style={styles.dateBookImage}
                            />
                          </View>
                          <Text style={styles.dateBookText}>{item.title}</Text>
                        </View>
                      );
                    }
                  )}
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
