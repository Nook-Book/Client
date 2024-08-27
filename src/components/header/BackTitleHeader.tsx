import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import { styles } from "../../styles/header/BackHeaderStyle";
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
    <SafeAreaView>
      <View style={styles.container}>
        <BackIcon
          style={styles.button}
          onPress={() => navigation.goBack()}
          color={Color.Contents.Icon}
        />
        {isTitleVisible && <Text style={styles.text2}>{title}</Text>}
      </View>
    </SafeAreaView>
  );
}
