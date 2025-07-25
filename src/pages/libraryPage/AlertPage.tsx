import React from "react";
import { FlatList, Text, View } from "react-native";
import BackHeader from "../../components/header/BackHeader";
import { useGetAlarm } from "../../hooks/alarm/useAlarm";
import { styles } from "../../styles/library/AlertPageStyle";
import { AlarmItem } from "../../types/alarm/alarm";

function getTimeAgoText(timeValue: number, timeType: string) {
  switch (timeType) {
    case "MINUTE":
      return `${timeValue}분 전`;
    case "HOUR":
      return `${timeValue}시간 전`;
    case "DAY":
      return `${timeValue}일 전`;
    default:
      return "";
  }
}

export default function AlertPage() {
  const { data, isLoading, error, refetch } = useGetAlarm();
  console.log("data", data?.information.alarms[0]);
  const AlertItem = ({ item, index }: { item: AlarmItem; index: number }) => {
    return (
      <View style={styles.alertItem} key={index}>
        <Text style={styles.alertText}>{item.message}</Text>
        <Text style={styles.dateText}>
          {getTimeAgoText(item.timeValue, item.timeType)}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <BackHeader title="알림" />
      <FlatList
        data={data?.information.alarms}
        renderItem={({ item, index }) => (
          <AlertItem item={item} index={index} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
