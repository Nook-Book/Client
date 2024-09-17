import React from "react";
import { Text, View } from "react-native";
import Profile from "../../../assets/images/profile/FriendProfile.svg";
import { styles } from "../../../styles/myPage/friendPage/FriendComponent";

const friendComponent = ({ image, name }: { image?: string; name: string }) => {
  return (
    <View style={styles.container}>
      <Profile />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default friendComponent;
