import React from "react";
import { Pressable, SafeAreaView, View } from "react-native";
import AlertIcon from "../../assets/images/icon/Alert.svg";
import AlertVariantIcon from "../../assets/images/icon/AlertVariant.svg";
import LogoIcon from "../../assets/images/icon/Logo.svg";
import { useGetAlarm } from "../../hooks/alarm/useAlarm";
import { styles } from "../../styles/header/HeaderStyle";

export default function MainHeader({ navigation }: { navigation: any }) {
  const { data } = useGetAlarm();
  // 알림 데이터에 unread(읽지 않음) 정보가 있다고 가정
  const hasUnread = data?.information.alarms?.some((alarm: any) => !alarm.read);

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
