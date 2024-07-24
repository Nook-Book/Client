import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import ShareIcon from "../../assets/images/icon/Share.svg";
import { styles } from "../../styles/header/BackShareHeaderStyle";
import { useNavigation } from "@react-navigation/native";

export default function BackShareHeader({
  title,
  isTitleVisible,
}: {
  title: string;
  isTitleVisible: boolean;
}) {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackIcon onPress={() => navigation.goBack()} />
        {isTitleVisible && <Text style={styles.text}>{title}</Text>}
        <ShareIcon />
      </View>
    </SafeAreaView>
  );
}
