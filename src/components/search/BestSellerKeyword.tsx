import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../../styles/search/RecentSearchCardStyle";
import XMini from "../../assets/images/icon/XMini.svg";
import { BestSellerKeywordProp } from "../../types/search/bestbook";
import { Color } from "../../styles/Theme";

const BestSellerKeyword = ({
  text,
  onFocus,
  checked,
}: BestSellerKeywordProp) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: checked ? Color.Field.Primary : Color.Secondary },
      ]}
    >
      <TouchableOpacity onPress={() => onFocus(text)}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BestSellerKeyword;
