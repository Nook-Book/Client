import React from "react";
import { View } from "react-native";
import SearchHeader from "../../components/search/SearchHeader";
import RecentSearch from "../../components/search/RecentSearch";
import { styles } from "../../styles/search/SearchPageStyle";
import BestSeller from "../../components/search/BestSeller";

export default function SearchPage() {
  return (
    <View style={styles.container}>
      <SearchHeader />
      <RecentSearch />
      <BestSeller />
    </View>
  );
}
