import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchHeader from "../../components/search/SearchHeader";
import RecentSearch from "../../components/search/RecentSearch";
import { styles } from "../../styles/search/SearchPageStyle";

export default function SearchPage() {
  return (
    <View style={styles.container}>
      <SearchHeader />
      <RecentSearch />
    </View>
  );
}
