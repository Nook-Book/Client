import React from "react";
import { View } from "react-native";
import BestSeller from "../../components/search/BestSeller";
import SearchHeader from "../../components/search/SearchHeader";
import { styles } from "../../styles/search/SearchPageStyle";

export default function SearchPage() {
  return (
    <View style={styles.container}>
      <SearchHeader />
      {/* <RecentSearch /> */}
      <BestSeller />
    </View>
  );
}
