import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../../../styles/myPage/friendPage/FriendRenderActions";

const FriendRenderActions = ({
  name,
  onDelete,
}: {
  name: string;
  onDelete: (name: string) => void;
}) => {
  return (
    <>
      <TouchableOpacity onPress={() => onDelete(name)} style={styles.delete}>
        <Text style={styles.text}>삭제하기</Text>
      </TouchableOpacity>
    </>
  );
};

export default FriendRenderActions;
