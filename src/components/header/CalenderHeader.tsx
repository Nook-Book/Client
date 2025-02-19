import React from "react";
import { View, SafeAreaView, Text, Pressable } from "react-native";
import CancelIcon from "../../assets/images/icon/Cancel.svg";
import { styles } from "../../styles/header/HeaderStyle";
import { Color } from "../../styles/Theme";

export default function CalenderHeader({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.centerContainer}>
        <Pressable onPress={onPress} style={styles.leftButtonWrap}>
          <CancelIcon color={Color.Contents.Icon} />
        </Pressable>
        <Text style={styles.text1}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}
