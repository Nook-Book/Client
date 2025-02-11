import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import BackHeader from "../../components/header/BackHeader";
import { styles } from "../../styles/search/BestSellerPageStyle";
import { BestSellerKeywordsList, BestSellerLabel } from "../../constans/search";
import BestSellerKeyword from "../../components/search/BestSellerKeyword";
import { BestSellerKeywordsCategory } from "../../types/search/bestbook";
import BookCollection from "../../components/search/BookCollection";

const BestSellerPage: React.FC = () => {
  const [keywords, setKeywords] = useState<BestSellerKeywordsCategory[]>(
    BestSellerKeywordsList
  );

  const handleKeywordFocus = (name: string) => {
    setKeywords((prevKeywords) =>
      prevKeywords.map((category) =>
        category.name === name
          ? { ...category, checked: !category.checked }
          : category
      )
    );
  };

  return (
    <View style={styles.container}>
      <BackHeader title={BestSellerLabel} />
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.keywordContainer}
        >
          {keywords.map((keyword) => (
            <BestSellerKeyword
              key={keyword.name}
              text={keyword.name}
              checked={keyword.checked}
              onFocus={() => handleKeywordFocus(keyword.name)}
            />
          ))}
        </ScrollView>
      </View>
      <BookCollection />
    </View>
  );
};

export default BestSellerPage;
