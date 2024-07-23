import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchHeader from "../../components/search/SearchHeader";

export default function SearchPage() {
  return (
    <View style={styles.container}>
      <SearchHeader />
      <Text>Search Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
