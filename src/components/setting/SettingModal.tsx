import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "../../styles/settingPage/SettingModal";

const SettingModal = ({
  title,
  content,
  onClick,
  onCancel,
}: {
  title: string;
  content: string;
  onClick: () => void;
  onCancel: () => void;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onClick}>
          <Text style={styles.okButton}>확인</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onCancel}>
          <Text style={styles.cancelButton}>취소</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingModal;
