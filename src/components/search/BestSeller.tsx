import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native"; // useNavigation 훅을 가져옵니다
import { BestSellerButton, BestSellerLabel } from "../../constans/search";
import { styles } from "../../styles/search/BestSellerStyle";
import { NavigationProp } from "../../types/search/index";
import { dummyList } from "../../assets/data/dummyBestBookList";
import BestSellerBook from "./BestSellerBook";
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
      <BookCollection />
    </View>
  );
};

export default BestSeller;
