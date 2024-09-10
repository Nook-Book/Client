import { View, Text } from "react-native";
import React from "react";
import { styles } from "../../styles/myPage/friendPage/FriendPage";
import MyPageAtherNav from "../../components/myPage/MyPageAtherNav";

const FriendPage = () => {
  return (
    <View style={styles.container}>
      <MyPageAtherNav title="친구" />
    </View>
  );
};

export default FriendPage;
