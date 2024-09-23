import React from "react";
import { Text, View } from "react-native";
import FriendComponent from "./FriendComponent";

const SendRequestFriend = ({
  userList,
  isRequest,
}: {
  userList: string[];
  isRequest: boolean;
}) => {
  return (
    <View>
      {userList.length > 0 ? (
        <>
          {userList.map((name, index) => (
            <FriendComponent
              name={name}
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
