import React from "react";
import { Pressable, SafeAreaView } from "react-native";
import SettingImage from "../../assets/images/icon/Setting.svg";
import { styles } from "../../styles/myPage/MyPageNav";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../types/search";

const MyPageNav: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate("SettingPage");
        }}
        style={styles.settingContainer}
      >
        <SettingImage />
      </Pressable>
    </SafeAreaView>
  );
};

export default MyPageNav;
