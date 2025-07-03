import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { BestSellerButton, BestSellerLabel } from "../../constans/search";
import { styles } from "../../styles/search/BestSellerStyle";
import { NavigationProp } from "../../types/search";
import BookCollection from "./BookCollection";

const BestSeller: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate("BestSellerPage");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>{BestSellerLabel}</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.button}>{BestSellerButton}</Text>
        </TouchableOpacity>
      </View>
      <BookCollection isMarginBottom={true} category={"종합"} />
    </View>
  );
};

export default BestSeller;
