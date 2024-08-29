import React from "react";
import { View, TouchableOpacity, SafeAreaView } from "react-native";
import SettingImage from "../../assets/images/icon/Setting.svg";
import { styles } from "../../styles/myPage/MyPageNav";

const MyPageNav = () => {
  const handleSettingPress = () => {
    console.log("Settings icon pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={handleSettingPress}
        style={styles.settingContainer}
      >
        <SettingImage />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MyPageNav;
