import React, { useEffect, useState } from "react";
import { View, Text, Modal, Alert } from "react-native";
import { CalendarList, LocaleConfig } from "react-native-calendars";
import { styles } from "../../styles/challenge/CalenderSelectModalStyle";
import { Color, Font } from "../../styles/Theme";
import CalenderHeader from "../header/CalenderHeader";
import {
  calculateDaysDifference,
  getDayOfWeek,
} from "../../utils/calendarUtils";
import BottomOneButton from "../bottomSheet/BottomOneButton";

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

export default function CalenderSelectModal({
  visible,
  onClose,
  onComplate,
  startDate,
  endDate,
}: {
  visible: boolean;
  onClose: () => void;
  onComplate: (editStartDate: string, editEndDate: string) => void;
  startDate: string;
  endDate: string;
}) {
  const [markedDates, setMarkedDates] = useState<any>({});
  const [editStartDate, setEditStartDate] = useState(startDate);
  const [editEndDate, setEditeditEndDate] = useState(endDate);

  useEffect(() => {
    if (editStartDate && editEndDate) {
      setMarkedDates(calculateMarkedDates(editStartDate, editEndDate));
    }
  }, []);

  const onDayPress = (day: any) => {
    const dateString = day.dateString;

    if (!editStartDate) {
      setEditStartDate(dateString);
      setMarkedDates(calculateMarkedDates(dateString, editEndDate));
    } else if (!editEndDate) {
      if (new Date(dateString) >= new Date(editStartDate)) {
        setEditeditEndDate(dateString);
        setMarkedDates(calculateMarkedDates(editStartDate, dateString));
      } else {
        Alert.alert("종료일은 시작일 이후의 날짜여야 합니다.");
      }
    } else {
      setEditStartDate(dateString);
      setEditeditEndDate("");
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
      let editStartDate = new Date(start);
      let editEndDate = new Date(end);

      if (editStartDate > editEndDate) {
        [editStartDate, editEndDate] = [editEndDate, editStartDate];
      }

      while (editStartDate <= editEndDate) {
        const dateString = editStartDate.toISOString().split("T")[0];
        markedDates[dateString] = periodStyle;
        editStartDate.setDate(editStartDate.getDate() + 1);
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

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={{ width: "100%" }}>
          <CalenderHeader title="날짜 선택" onPress={onClose} />
        </View>
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
              {editStartDate
                ? `${editStartDate.replaceAll("-", ".")} (${getDayOfWeek(
                    editStartDate
                  )})`
                : ""}
            </Text>
          </View>
          <Text style={styles.periodHeadText}>
            {editStartDate && editEndDate
              ? `${calculateDaysDifference(editStartDate, editEndDate)}일`
              : ""}
          </Text>
          <View style={styles.periodDateWrap}>
            <Text style={styles.periodHeadText}>종료일</Text>
            <Text style={styles.periodDateText}>
              {editEndDate
                ? `${editEndDate.replaceAll("-", ".")} (${getDayOfWeek(
                    editEndDate
                  )})`
                : ""}
            </Text>
          </View>
        </View>
        <BottomOneButton
          handleAccept={() => onComplate(editStartDate, editEndDate)}
          text="확인"
          disabled={!(!!editStartDate && !!editEndDate)}
        />
      </View>
    </Modal>
  );
}
