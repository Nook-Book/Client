import React from "react";
import { View } from "react-native";
import ReceivedFriendComponent from "./ReceivedFriendComponent";

const ReceivedRequestFriend = () => {
  const ReceivedRequests = ["야옹아 멍멍해봐", "멍멍멍멍"];
  return (
    <View>
      {ReceivedRequests.map((name, index) => (
        <ReceivedFriendComponent name={name} key={index} />
      ))}
    </View>
  );
};

export default ReceivedRequestFriend;
