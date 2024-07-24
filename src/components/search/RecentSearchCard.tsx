import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../../styles/search/RecentSearchCardStyle";
import XMini from "../../assets/images/icon/XMini.svg";

const RecentSearchCard = ({
  text,
  onDelete,
}: {
  text: string;
  onDelete: (text: string) => void;
}) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TouchableOpacity onPress={() => onDelete(text)}>
        <XMini style={styles.button} />
      </TouchableOpacity>
    </View>
  );
};

export default RecentSearchCard;
