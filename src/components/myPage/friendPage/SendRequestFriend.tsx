import React from "react";
import { View } from "react-native";
import SendFriendComponent from "./SendFriendComponent";

const SendRequestFriend = () => {
  const SendRequests = ["야옹아 멍멍해봐"];
  return (
    <View>
      {SendRequests.map((name, index) => (
        <SendFriendComponent name={name} key={index} />
      ))}
    </View>
  );
};

export default SendRequestFriend;
