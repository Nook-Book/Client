import React from "react";
import { View, SafeAreaView, Text, Pressable } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import { styles } from "../../styles/header/HeaderStyle";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../../styles/Theme";

export default function BackHeader({
  title,
  onPress,
}: {
  title: string;
  onPress?: () => void;
}) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.centerContainer}>
        <Pressable
          onPress={() => (onPress ? onPress() : navigation.goBack())}
          style={styles.leftButtonWrap}
        >
          <BackIcon color={Color.Contents.Icon} />
        </Pressable>
        <Text style={styles.text1}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}
