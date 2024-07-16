import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./LibraryPageStyle";

export default function LibraryPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MainPage</Text>
      <Image source={require("../../assets/icon.png")} style={styles.image} />
    </View>
  );
}
