import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ChallengePage() {
  return (
    <View style={styles.container}>
      <Text>Challenge</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
