import React, { useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import BackHeader from "../../components/header/BackHeader";
import { useGetAlarm, useMarkAllAlarmsAsRead } from "../../hooks/alarm/useAlarm";
import { styles } from "../../styles/library/AlertPageStyle";
import { AlarmItem } from "../../types/alarm/alarm";
import { RootMyPageStackParamList } from "../../types/navigation/navigation";

type RootTabParamList = {
  서재: undefined;
  검색: undefined;
  챌린지: { screen?: string };
  마이: { screen?: string };
};

type ChallengeStackParamList = {
  Challenge: undefined;
};

type AlertPageNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList>,
  CompositeNavigationProp<
    NativeStackNavigationProp<RootMyPageStackParamList>,
    NativeStackNavigationProp<ChallengeStackParamList>
  >
>;

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
  const markAllAsReadMutation = useMarkAllAlarmsAsRead();
  const navigation = useNavigation<AlertPageNavigationProp>();
  console.log("data", data?.information.alarms[0]);

  // 페이지에 포커스될 때마다 모든 알림을 읽음 처리
  useFocusEffect(
    React.useCallback(() => {
      // 읽지 않은 알림이 있을 때만 API 호출
      const hasUnreadAlarms = data?.information.alarms?.some(alarm => !alarm.read);
      if (hasUnreadAlarms) {
        markAllAsReadMutation.mutate();
      }
    }, [data?.information.alarms, markAllAsReadMutation])
  );
  
  const handleAlarmPress = (item: AlarmItem) => {
    if (item.alarmType === "FRIEND") {
      navigation.navigate("마이", { screen: "FriendPage" });
    } else if (item.alarmType === "CHALLENGE") {
      navigation.navigate("챌린지", { screen: "Challenge" });
    }
  };

  const AlertItem = ({ item, index }: { item: AlarmItem; index: number }) => {
    return (
      <TouchableOpacity 
        style={styles.alertItem} 
        key={index}
        onPress={() => handleAlarmPress(item)}
      >
        <Text style={styles.alertText}>{item.message}</Text>
        <Text style={styles.dateText}>
          {getTimeAgoText(item.timeValue, item.timeType)}
        </Text>
      </TouchableOpacity>
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
