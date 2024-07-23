import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import { styles } from "./BackHeaderStyle";
import { useNavigation } from "@react-navigation/native";

export default function BackHeader({ title }: { title: string }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackIcon style={styles.button} onPress={() => navigation.goBack()} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}
