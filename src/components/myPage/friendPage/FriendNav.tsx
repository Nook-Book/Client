import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../../styles/myPage/friendPage/FriendNav";
import { Color } from "../../../styles/Theme";

const FriendNav = ({
  state,
  onClick,
}: {
  state: "친구 목록" | "친구 추가";
  onClick: (state: "친구 목록" | "친구 추가") => void;
}) => {
  return (
    <View style={styles.friendContainer}>
      <TouchableOpacity
        style={[
          styles.friendButton,
          state === "친구 목록" && {
            borderBottomColor: Color.Contents.Click,
          },
        ]}
        onPress={() => onClick("친구 목록")}
      >
        <Text style={styles.friendButtonText}>친구 목록</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.friendButton,
          state === "친구 추가" && {
            borderBottomColor: Color.Contents.Click,
          },
        ]}
        onPress={() => onClick("친구 추가")}
      >
        <Text style={styles.friendButtonText}>친구 추가</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FriendNav;
