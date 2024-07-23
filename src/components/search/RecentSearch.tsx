import React, { useState } from "react";
import { View, Text } from "react-native";
import { RecentSearchText } from "../../constans/search";
import { styles } from "../../styles/search/RecentSearchStyle";
import { dummyRecentSearchList } from "../../assets/data/dummyRecentSearchList";
import RecentSearchCard from "./RecentSearchCard";

const RecentSearch = () => {
  const [searchList, setSearchList] = useState(dummyRecentSearchList);

  const handleDeleteCard = (text: string) => {
    setSearchList(searchList.filter((item) => item !== text));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{RecentSearchText}</Text>
      <View style={styles.cardContainer}>
        {searchList.map((search) => (
          <RecentSearchCard
            key={search}
            text={search}
            onDelete={handleDeleteCard}
          />
        ))}
      </View>
    </View>
  );
};

export default RecentSearch;
