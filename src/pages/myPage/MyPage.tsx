import React from "react";
import { View, Text } from "react-native";
import Profile from "../../components/myPage/Profile";
import MyPageNav from "../../components/myPage/MyPageNav";
import { styles } from "../../styles/myPage/MyPageStyle";

export default function MyPage() {
  return (
    <View style={styles.container}>
      <MyPageNav />
      <Profile />
    </View>
  );
}
