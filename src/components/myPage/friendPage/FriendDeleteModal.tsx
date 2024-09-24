import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../../styles/myPage/friendPage/FriendDeleteModal";

const FriendDeleteModal = ({
  title,
  onExit,
}: {
  title: string;
  onExit: () => void;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        {title}님을 {"\n"} 친구 삭제하시겠습니까?
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text style={styles.okButton}>삭제</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onExit}>
          <Text style={styles.cancelButton}>취소</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FriendDeleteModal;
