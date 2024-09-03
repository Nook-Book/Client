import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BestSellerButton, BestSellerLabel } from "../../constans/search";
import { styles } from "../../styles/search/BestSellerStyle";
import BookCollection from "./BookCollection";
import { NavigationProp } from "../../types/search";

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
      <BookCollection />
    </View>
  );
};

export default BestSeller;
