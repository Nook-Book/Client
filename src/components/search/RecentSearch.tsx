import React from "react";
import { ScrollView, Text, View } from "react-native";
import { RecentSearchText } from "../../constans/search";
import { useDeleteKeyword, useGetKeyword } from "../../hooks/book/useKeyword";
import { styles } from "../../styles/search/RecentSearchStyle";
import RecentSearchCard from "./RecentSearchCard";

const RecentSearch = () => {
  const { data, refetch } = useGetKeyword();
  const searchList = data.information;

  const { mutate } = useDeleteKeyword();

  const handleDeleteKeyword = (keywordId: number) => {
    mutate(
      { keywordId },
      {
        onSuccess: (data) => {
          console.log("Success");
          refetch();
        },
        onError: (error) => {
          console.log("Error", error.message);
        },
      }
    );
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
            onDelete={() => handleDeleteKeyword(search.keywordId)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default RecentSearch;
