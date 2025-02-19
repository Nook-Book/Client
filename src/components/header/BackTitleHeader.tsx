import React from "react";
import { View, SafeAreaView, Text, Pressable } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import { styles } from "../../styles/header/HeaderStyle";
import { Color } from "../../styles/Theme";

export default function BackTitleHeader({
  title,
  isTitleVisible,
  navigation,
}: {
  title: string;
  isTitleVisible: boolean;
  navigation: any;
}) {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.centerContainer}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.leftButtonWrap}
        >
          <BackIcon color={Color.Contents.Icon} />
        </Pressable>
        {isTitleVisible && <Text style={styles.text2}>{title}</Text>}
      </View>
    </SafeAreaView>
  );
}
