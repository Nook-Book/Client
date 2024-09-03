import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { CalendarList, LocaleConfig } from "react-native-calendars";
import { styles } from "../../styles/challenge/CalenderSelectPageStyle";
import { Color, Font } from "../../styles/Theme";
import CalenderHeader from "../../components/header/CalenderHeader";
import {
  calculateDaysDifference,
  getDayOfWeek,
} from "../../utils/calendarUtils";
import BottomOneButton from "../../components/bottomSheet/BottomOneButton";

// Locale 설정
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

export default function CalenderSelectPage({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { currentStartDate, currentEndDate } = route.params;
  const [startDate, setStartDate] = useState<string>(currentStartDate || "");
  const [endDate, setEndDate] = useState<string>(currentEndDate || "");
  const [markedDates, setMarkedDates] = useState<any>({});

  useEffect(() => {
    if (startDate && endDate) {
      setMarkedDates(calculateMarkedDates(startDate, endDate));
    }
  }, []);

  const onDayPress = (day: any) => {
    const dateString = day.dateString;

    if (!startDate) {
      setStartDate(dateString);
      setMarkedDates(calculateMarkedDates(dateString, endDate));
    } else if (!endDate) {
      if (new Date(dateString) >= new Date(startDate)) {
        setEndDate(dateString);
        setMarkedDates(calculateMarkedDates(startDate, dateString));
      } else {
        alert("종료일은 시작일 이후의 날짜여야 합니다.");
      }
    } else {
      setStartDate(dateString);
      setEndDate("");
      setMarkedDates(calculateMarkedDates(dateString, ""));
    }
  };

  const calculateMarkedDates = (start: string, end: string) => {
    const markedDates: any = {};
    const baseStyle = { textColor: Color.Typo.Primary };
    const selectedStyle = { color: Color.Click[300], ...baseStyle };
    const periodStyle = { color: "#E5E9EC", ...baseStyle };

    if (start) {
      markedDates[start] = selectedStyle;
    }

    if (end) {
      let startDate = new Date(start);
      let endDate = new Date(end);

      if (startDate > endDate) {
        [startDate, endDate] = [endDate, startDate];
      }

      while (startDate <= endDate) {
        const dateString = startDate.toISOString().split("T")[0];
        markedDates[dateString] = periodStyle;
        startDate.setDate(startDate.getDate() + 1);
      }

      if (start !== end) {
        markedDates[start] = { startingDay: true, ...selectedStyle };
        markedDates[end] = { endingDay: true, ...selectedStyle };
      } else {
        markedDates[start] = selectedStyle;
        markedDates[end] = selectedStyle;
      }
    }

    return markedDates;
  };

  const handleConfirm = () => {
    navigation.navigate("NewChallenge", {
      updatedStartDate: startDate,
      updatedEndDate: endDate,
    });
  };

  return (
    <View style={styles.container}>
      <CalenderHeader title="날짜 선택" navigation={navigation} />
      <View style={styles.contentContainer}>
        <CalendarList
          onDayPress={onDayPress}
          monthFormat={"yyyy년 MM월"}
          markingType={"period"}
          markedDates={markedDates}
          theme={{
            calendarBackground: "transparent",
            textSectionTitleColor: Color.Typo.Primary,
            dayTextColor: Color.Typo.Primary,
            monthTextColor: Color.Typo.Primary,
            arrowColor: Color.Typo.Primary,
            textDayHeaderFontFamily: "SCDream5",
            textDayHeaderFontSize: 14,
            textDayFontFamily: "SCDream5",
            textDayFontSize: 14,
          }}
          renderHeader={(date: any) => (
            <Text
              style={{
                ...Font.Label.Medium,
                color: Color.Typo.Primary,
                marginBottom: 18,
              }}
            >
              {date.toString("yyyy년 MM월")}
            </Text>
          )}
        />
      </View>
      <View style={styles.periodWrap}>
        <View style={styles.periodDateWrap}>
          <Text style={styles.periodHeadText}>시작일</Text>
          <Text style={styles.periodDateText}>
            {startDate
              ? `${startDate.replaceAll("-", ".")} (${getDayOfWeek(startDate)})`
              : ""}
          </Text>
        </View>
        <Text style={styles.periodHeadText}>
          {startDate && endDate
            ? `${calculateDaysDifference(startDate, endDate)}일`
            : ""}
        </Text>
        <View style={styles.periodDateWrap}>
          <Text style={styles.periodHeadText}>종료일</Text>
          <Text style={styles.periodDateText}>
            {endDate
              ? `${endDate.replaceAll("-", ".")} (${getDayOfWeek(endDate)})`
              : ""}
          </Text>
        </View>
      </View>
      <BottomOneButton
        handleAccept={handleConfirm}
        text="확인"
        disabled={!(!!startDate && !!endDate)}
      />
    </View>
  );
}
