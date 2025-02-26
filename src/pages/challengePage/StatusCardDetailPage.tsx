import React, { useState } from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { styles } from "../../styles/challenge/StatusCardDetailPageStyle";
import BackTitleHeader from "../../components/header/BackTitleHeader";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import ArrowLeftIcon from "../../assets/images/challange/ArrowLeft.svg";
import ArrowRightIcon from "../../assets/images/challange/ArrowRight.svg";
import { Color, Font } from "../../styles/Theme";

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
  const { clickStatus } = route.params;

  //통계 api 연동 필요

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

  const getDayName = (dayNumber: number) => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    return days[dayNumber];
  };

  return (
    <View style={styles.container}>
      <BackTitleHeader
        navigation={navigation}
        title={clickStatus.nickname}
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
              dayComponent={({ date }: { date: DateData }) => {
                //선택된 달에 관한 텍스트가 아니면 투명하게 처리
                const isSameMonth =
                  date.month === currentMonth.month &&
                  date.year === currentMonth.year;

                const textColor = isSameMonth
                  ? Color.Typo.Primary
                  : "transparent";

                //선택한 날짜 비교
                const isMarked =
                  date.month === selectedDate.month &&
                  date.year === selectedDate.year &&
                  date.day === selectedDate.day;

                //요일 게산
                const dayDate = new Date(date.year, date.month - 1, date.day);

                return (
                  <Pressable
                    style={{
                      width: 44,
                      height: 44,
                      marginBottom: -10,
                      backgroundColor:
                        isSameMonth && isMarked
                          ? Color.Click[300]
                          : "transparent",
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
                    <Text
                      style={{
                        ...Font.Label.SemiMedium,
                        color: textColor,
                      }}
                    >
                      {date.day}
                    </Text>
                  </Pressable>
                );
              }} //날짜 셀 커스텀 렌더링
            />
          </View>
          <View style={styles.dateWrap}>
            <Text style={styles.dateText}>
              {selectedDate.month}월 {selectedDate.day}일 (
              {getDayName(selectedDate.week)})
            </Text>
            <View>
              <Text style={styles.dateItemHeadText}>총 독서 시간</Text>
              <Text style={styles.dateItemText}>00 : 50 : 31</Text>
            </View>
            <View style={styles.dateItemWrap}>
              <View>
                <Text style={styles.dateItemHeadText}>시작 시간</Text>
                <Text style={styles.dateItemText}>09시 21분</Text>
              </View>
              <View>
                <Text style={styles.dateItemHeadText}>종료 시간</Text>
                <Text style={styles.dateItemText}>23시 12분</Text>
              </View>
            </View>
            <View>
              <Text style={styles.dateItemHeadText}>읽은 책</Text>
              <View style={styles.dateBookWrap}>
                <View style={styles.dateBookItemWrap}>
                  <View>
                    <Image
                      source={require("../../assets/images/dummy/book/2.png")}
                      style={styles.dateBookImage}
                    />
                  </View>
                  <Text style={styles.dateBookText}>
                    몰입 : 인생을 바꾸는 자기혁명
                  </Text>
                </View>
                <View style={styles.dateBookItemWrap}>
                  <View>
                    <Image
                      source={require("../../assets/images/dummy/book/2.png")}
                      style={styles.dateBookImage}
                    />
                  </View>
                  <Text style={styles.dateBookText}>
                    몰입 : 인생을 바꾸는 자기혁명 몰입 : 인생을 바꾸는dfsdfs
                    자기혁명몰입 : 인생을 바꾸는 자기혁명 몰입 : 인생을
                    바꾸sdfsdfdfsdfdf
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
