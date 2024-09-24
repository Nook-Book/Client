import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Inter from "../../assets/images/icon/Inter.svg";
import { styles } from "../../styles/settingPage/SettingAuth";

const SettingAuthComponent = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      <Inter />
    </TouchableOpacity>
  );
};

export default SettingAuthComponent;
