import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native"; // useNavigation 훅을 가져옵니다
import { BestSellerButton, BestSellerLabel } from "../../constans/search";
import { styles } from "../../styles/search/BestSellerStyle";
import { NavigationProp } from "../../types/search/index";
import { dummyList } from "../../assets/data/dummyBestBookList";
import BestSellerBook from "./BestSellerBook";

const BestSeller: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate("OtherScreen");
  };

  // 3*4 배열을 만들기 위해 3개씩 푸시함.
  const groupedBooks = [];
  for (let i = 0; i < dummyList.length; i += 3) {
    groupedBooks.push(dummyList.slice(i, i + 3));
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.text}>{BestSellerLabel}</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.button}>{BestSellerButton}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.bestSellerContainer}>
        {groupedBooks.map((group, index) => (
          <View key={index} style={styles.row}>
            {group.map((book) => (
              <BestSellerBook
                key={book.id}
                id={book.id}
                image={book.image}
                title={book.title}
                name={book.name}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default BestSeller;
