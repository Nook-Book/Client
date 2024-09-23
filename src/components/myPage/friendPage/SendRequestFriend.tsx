import React from "react";
import { Text, View } from "react-native";
import SendFriendComponent from "./SendFriendComponent";

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
            <SendFriendComponent
              name={name}
              key={index}
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
