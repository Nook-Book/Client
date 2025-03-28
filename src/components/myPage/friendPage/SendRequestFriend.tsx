import React from "react";
import { Text, View } from "react-native";
import { FriendRequest } from "../../../types/mypage/friend";
import FriendComponent from "./FriendComponent";

const SendRequestFriend = ({
  userList,
  isRequest,
}: {
  userList: FriendRequest[];
  isRequest: boolean;
}) => {
  return (
    <View>
      {userList.length > 0 ? (
        <>
          {userList.map((user, index) => (
            <FriendComponent
              user={user}
              key={index}
              type={"SendFriend"}
              isRequestProp={isRequest}
            />
          ))}
        </>
      ) : (
        <Text>없음</Text>
      )}
    </View>
  );
};

export default SendRequestFriend;
