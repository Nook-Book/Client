import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { RecentSearchText } from "../../constans/search";
import { styles } from "../../styles/search/RecentSearchStyle";
import { dummyRecentSearchList } from "../../assets/data/dummyRecentSearchList";
import RecentSearchCard from "./RecentSearchCard";

const RecentSearch = () => {
  const [searchList, setSearchList] = useState(dummyRecentSearchList);

  // 같은 이름이 있을 경우 delete함수가 안 먹히는데 이는 어처피 api호출로 해결될 문제로 보임.
  const handleDeleteCard = (text: string) => {
    setSearchList(searchList.filter((item) => item !== text));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{RecentSearchText}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardContainer}
      >
        {searchList.map((search) => (
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
