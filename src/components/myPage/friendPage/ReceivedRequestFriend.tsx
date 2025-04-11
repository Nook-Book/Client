import React from "react";
import { View } from "react-native";
import { FriendRequest } from "../../../types/mypage/friend";
import FriendComponent from "./FriendComponent";

const ReceivedRequestFriend = ({
  friends,
  refetch,
}: {
  friends: FriendRequest[];
  refetch: () => void;
}) => {
  console.log("friends", friends);
  return (
    <View>
      {friends.map((friend, index) => (
        <FriendComponent
          key={index}
          user={friend}
          type={"RecieveFriend"}
          refetch={refetch}
        />
      ))}
    </View>
  );
};

export default ReceivedRequestFriend;
