import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Profile from "../../../assets/images/profile/FriendProfile.svg";
import { styles } from "../../../styles/myPage/friendPage/ReceivedFriendComponent";

const ReceivedFriendComponent = ({ name }: { name: string }) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Profile />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.item}>
        <TouchableOpacity style={styles.okButton}>
          <Text style={styles.okText}>수락</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.refuseButton}>
          <Text style={styles.refuseText}>거절</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReceivedFriendComponent;
