import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./LibraryPageStyle";

export default function AlertPage() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>AlertPage</Text>
      </View>
    </ScrollView>
  );
}
