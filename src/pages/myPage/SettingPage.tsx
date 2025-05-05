import React, { useState } from "react";
import { SafeAreaView, Switch, Text, View } from "react-native";
import BackTextHeader from "../../components/header/BackTextHeader";
import SettingAuthComponent from "../../components/setting/SettingAuthComponent";
import SettingModal from "../../components/setting/SettingModal";
import { useExit, useLogout } from "../../hooks/auth/useAuth";
import { styles } from "../../styles/settingPage/SettingPage";
import { Color } from "../../styles/Theme";

const SettingPage = ({ navigation }: { navigation: any }) => {
  // 상태를 관리하기 위한 상태 변수와 상태 변경 함수
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  const { mutate: logout } = useLogout();
  const { mutate: exit } = useExit();

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleLogout = () => {
    //Logout Module
    logout(undefined, {
      onSuccess: () => {
        console.log("로그아웃 성공");
        navigation.navigate("LoginPage");
      },
      onError: (error: any) => {
        console.error("로그아웃 실패:", error);
      },
    });

    setIsLogoutModalOpen(false);
  };
  const handleExit = () => {
    //Exit Module
    exit(undefined, {
      onSuccess: () => {
        console.log("탈퇴 성공");
        navigation.navigate("LoginPage");
      },
      onError: (error: any) => {
        console.error("탈퇴 실패:", error);
      },
    });
    setIsExitModalOpen(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <BackTextHeader title="설정" />
      <View style={styles.contentContainer}>
        <Text style={styles.label}>알림 활성화</Text>
        <Switch
          trackColor={{ false: Color.Contents.Default, true: Color.Click[500] }}
          thumbColor={Color.Secondary}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <SettingAuthComponent
        title="로그아웃"
        onClick={() => {
          setIsLogoutModalOpen(true);
        }}
      />
      <SettingAuthComponent
        title="탈퇴하기"
        onClick={() => {
          setIsExitModalOpen(true);
        }}
      />
      {isLogoutModalOpen && (
        <>
          <View style={styles.overlay} />
          <SettingModal
            title="로그아웃"
            content="로그아웃 하시겠습니까?"
            onClick={handleLogout}
            onCancel={() => setIsLogoutModalOpen(false)}
          />
        </>
      )}

      {isExitModalOpen && (
        <>
          <View style={styles.overlay} />
          <SettingModal
            title="탈퇴하기"
            content={`탈퇴 시, 모든 데이터가 삭제됩니다. \n탈퇴하시겠습니까?`}
            onClick={handleExit}
            onCancel={() => setIsExitModalOpen(false)}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default SettingPage;
