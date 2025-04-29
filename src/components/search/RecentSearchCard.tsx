import React from "react";
import { Text, TouchableOpacity } from "react-native";
import XMini from "../../assets/images/icon/XMini.svg";
import { styles } from "../../styles/search/RecentSearchCardStyle";
import { RootStackParamList } from "../../types/search";
import { handleSearchSubmit } from "../../utils/search/handleSearch";

const RecentSearchCard = ({
  text,
  onDelete,
  navigation,
}: {
  text: string;
  onDelete: (text: string) => void;
  navigation: RootStackParamList;
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleSearchSubmit(text, navigation)}
    >
      <Text>{text}</Text>
      <TouchableOpacity onPress={() => onDelete(text)}>
        <XMini style={styles.button} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default RecentSearchCard;
