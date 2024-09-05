import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { styles } from "../../styles/settingPage/SettingNav";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/search";
import BackIcon from "../../assets/images/icon/Back.svg";

const MyPageAtherNav = ({ title }: { title: string }) => {
  const navigation = useNavigation<RootStackParamList>();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackIcon style={styles.button} onPress={() => navigation.goBack()} />
        <Text>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default MyPageAtherNav;
