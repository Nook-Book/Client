import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDeleteFriend } from "../../../hooks/mypage/useFriend";
import { styles } from "../../../styles/myPage/friendPage/FriendDeleteModal";

const FriendDeleteModal = ({
  title,
  friendId,
  onExit,
  refetch,
}: {
  title: string;
  friendId: number;
  onExit: () => void;
  refetch: () => void;
}) => {
  const { mutate: deleteFriend } = useDeleteFriend();

  // 친구 삭제
  const handleDeleteFriend = () => {
    deleteFriend(friendId);
    refetch();
    onExit();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        {title}님을 {"\n"} 친구 삭제하시겠습니까?
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleDeleteFriend}>
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
