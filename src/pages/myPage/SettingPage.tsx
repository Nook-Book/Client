import React, { useState } from "react";
import { View, Text, SafeAreaView, Switch } from "react-native";
import { styles } from "../../styles/settingPage/SettingPage";
import { Color } from "../../styles/Theme";
import SettingAuthComponent from "../../components/setting/SettingAuthComponent";
import SettingNav from "../../components/setting/SettingNav";
import SettingModal from "../../components/setting/SettingModal";

const SettingPage = () => {
  // 상태를 관리하기 위한 상태 변수와 상태 변경 함수
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleLogout = () => {
    //Logout Module

    setIsLogoutModalOpen(false);
  };
  const handleExit = () => {
    //Exit Module

    setIsExitModalOpen(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SettingNav />
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
