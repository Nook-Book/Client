import React from "react";
import { FlatList, Text, View } from "react-native";
import BackHeader from "../../components/header/BackHeader";
import { useGetAlarm } from "../../hooks/alarm/useAlarm";
import { styles } from "../../styles/library/AlertPageStyle";
import { AlarmItem } from "../../types/alarm/alarm";

export default function AlertPage() {
  const { data, isLoading, error, refetch } = useGetAlarm();
  const AlertItem = ({ item, index }: { item: AlarmItem; index: number }) => {
    return (
      <View style={styles.alertItem} key={index}>
        <Text style={styles.alertText}>{item.message}</Text>
        <Text style={styles.dateText}>{item.timeValue}</Text>
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
