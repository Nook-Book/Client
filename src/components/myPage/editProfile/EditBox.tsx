import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../../styles/myPage/editProfilePage/EditBox";

const EditBox = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.textBox} onPress={onClick}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditBox;
