import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { RecentSearchText } from "../../constans/search";
import { styles } from "../../styles/search/RecentSearchStyle";
import { dummyRecentSearchList } from "../../assets/data/dummyRecentSearchList";
import RecentSearchCard from "./RecentSearchCard";

const RecentSearch = () => {
  const [searchList, setSearchList] = useState(dummyRecentSearchList);

  const handleDeleteCard = (text: string) => {
    setSearchList(searchList.filter((item) => item !== text));
  };

  // 최근 검색 카드 최대 5개로 제한
  const limitedSearchList = searchList.slice(0, 5);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{RecentSearchText}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardContainer}
      >
        {limitedSearchList.map((search) => (
          <RecentSearchCard
            key={search}
            text={search}
            onDelete={handleDeleteCard}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default RecentSearch;
