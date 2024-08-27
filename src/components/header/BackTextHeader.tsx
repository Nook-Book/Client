import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import { styles } from "../../styles/header/BackHeaderStyle";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../../styles/Theme";

export default function BackTextHeader({ title }: { title: string }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackIcon
          style={styles.button}
          onPress={() => navigation.goBack()}
          color={Color.Contents.Icon}
        />
        <Text style={styles.text2}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}
