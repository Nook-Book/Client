import React from "react";
import { ScrollView, Text, View } from "react-native";
import { RecentSearchText } from "../../constans/search";
import { useGetKeyword } from "../../hooks/book/useKeyword";
import { styles } from "../../styles/search/RecentSearchStyle";
import RecentSearchCard from "./RecentSearchCard";

const RecentSearch = () => {
  const { data } = useGetKeyword();
  const searchList = data.information;

  // 같은 이름이 있을 경우 delete함수가 안 먹히는데 이는 어처피 api호출로 해결될 문제로 보임.
  const handleDeleteCard = (text: string) => {
    // setSearchList(searchList.filter((item) => item !== text));
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
            key={search.keywordId}
            text={search.content}
            onDelete={handleDeleteCard}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default RecentSearch;
