import React from "react";
import { View, SafeAreaView, Text, Pressable } from "react-native";
import CancelIcon from "../../assets/images/icon/Cancel.svg";
import { styles } from "../../styles/header/HeaderStyle";
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
      <View style={styles.centerContainer}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.leftButtonWrap}
        >
          <CancelIcon color={Color.Contents.Icon} />
        </Pressable>
        <Text style={styles.text1}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}
