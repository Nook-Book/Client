import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Profile from "../../../assets/images/profile/FriendProfile.svg";
import { styles } from "../../../styles/myPage/friendPage/ReceivedFriendComponent";

const SendFriendComponent = ({ name }: { name: string }) => {
  const [isRequest, setIsRequest] = useState<boolean>(true);
  const handleCancleRequest = () => {
    setIsRequest(false);
  };
  const handleRequestFriend = () => {
    setIsRequest(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Profile />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.item}>
        {isRequest ? (
          <TouchableOpacity
            style={styles.requestButton}
            onPress={handleCancleRequest}
          >
            <Text style={styles.okText}>요청됨</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.okButton}
            onPress={handleRequestFriend}
          >
            <Text style={styles.okText}>친구 요청</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SendFriendComponent;
