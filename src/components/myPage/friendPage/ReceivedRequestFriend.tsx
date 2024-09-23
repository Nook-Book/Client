import React from "react";
import { View } from "react-native";
import FriendComponent from "./FriendComponent";

const ReceivedRequestFriend = () => {
  const ReceivedRequests = ["야옹아 멍멍해봐", "멍멍멍멍"];
  return (
    <View>
      {ReceivedRequests.map((name, index) => (
        <FriendComponent name={name} type={"RecieveFriend"} />
      ))}
    </View>
  );
};

export default ReceivedRequestFriend;
