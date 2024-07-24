import React from "react";
import { View, SafeAreaView } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import ShareIcon from "../../assets/images/icon/Share.svg";
import { styles } from "./MainHeaderStyle";
import { useNavigation } from "@react-navigation/native";

export default function BackShareHeader() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackIcon onPress={() => navigation.goBack()} />
        <ShareIcon />
      </View>
    </SafeAreaView>
  );
}
