import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import CancelIcon from "../../assets/images/icon/Cancel.svg";
import { styles } from "../../styles/header/BackHeaderStyle";
import { Color } from "../../styles/Theme";

export default function CalenderHeader({
  title,
  navigation,
}: {
  title: string;
  navigation: any;
}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CancelIcon
          style={styles.button}
          onPress={() => navigation.goBack()}
          color={Color.Contents.Icon}
        />
        <Text style={styles.text1}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}
