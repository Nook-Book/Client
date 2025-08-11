import React from "react";
import { Pressable, SafeAreaView, View } from "react-native";
import AlertIcon from "../../assets/images/icon/Alert.svg";
import AlertVariantIcon from "../../assets/images/icon/AlertVariant.svg";
import LogoIcon from "../../assets/images/icon/Logo.svg";
import { useGetAlarm } from "../../hooks/alarm/useAlarm";
import { AlarmItem } from "../../types/alarm/alarm";
import { styles } from "../../styles/header/HeaderStyle";

export default function MainHeader({ navigation }: { navigation: any }) {
  const { data } = useGetAlarm();
  // 읽지 않은 알림이 있는지 확인 (read가 false인 알림이 있는지 체크)
  const hasUnread = data?.information.alarms?.some((alarm: AlarmItem) => !alarm.read);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.mainContainer}>
        <LogoIcon />
        {hasUnread ? (
          <Pressable
            onPress={() => navigation.navigate("Alert")}
            style={styles.buttonWrap}
          >
            <AlertVariantIcon />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => navigation.navigate("Alert")}
            style={styles.buttonWrap}
          >
            <AlertIcon />
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}
