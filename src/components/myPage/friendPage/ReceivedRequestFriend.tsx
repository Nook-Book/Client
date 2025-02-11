import React from "react";
import { View } from "react-native";
import { FriendRequest } from "../../../types/mypage/friend";
import FriendComponent from "./FriendComponent";

const ReceivedRequestFriend = ({ friends }: { friends: FriendRequest[] }) => {
  return (
    <View>
      {friends.map((friend, index) => (
        <FriendComponent
          key={index}
          image={friend.imageUrl}
          name={friend.nickname}
          type={"RecieveFriend"}
        />
      ))}
    </View>
  );
};

export default ReceivedRequestFriend;
