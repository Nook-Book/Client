import React from "react";
import { View, SafeAreaView, Text, Pressable } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import { styles } from "../../styles/header/HeaderStyle";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../../styles/Theme";

export default function BackTextHeader({
  title,
  onBackPress,
}: {
  title: string;
  onBackPress?: () => void;
}) {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.centerContainer}>
        <Pressable
          onPress={() =>
            onBackPress === undefined ? navigation.goBack() : onBackPress()
          }
          style={styles.leftButtonWrap}
        >
          <BackIcon color={Color.Contents.Icon} />
        </Pressable>
        <Text style={[styles.text2, { marginRight: 56 }]}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}
