import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchHeader from "../../components/search/SearchHeader";
import RecentSearch from "../../components/search/RecentSearch";
import { styles } from "../../styles/search/SearchPageStyle";
import BestSeller from "../../components/search/BestSeller";
import { dummyList } from "../../assets/data/dummyBookCarouseList";

export default function SearchPage() {
  return (
    <View style={styles.container}>
      <SearchHeader />
      <RecentSearch />
      <BestSeller />
    </View>
  );
}
