import React from "react";
import { View, SafeAreaView, Text, Pressable } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import ShareIcon from "../../assets/images/icon/Share.svg";
import { styles } from "../../styles/header/HeaderStyle";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../../styles/Theme";

export default function BackShareHeader({
  title,
  isTitleVisible,
  onSharePress,
}: {
  title: string;
  isTitleVisible: boolean;
  onSharePress: () => void;
}) {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.betweenContainer}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.buttonWrap}
        >
          <BackIcon color={Color.Contents.Icon} />
        </Pressable>
        {isTitleVisible && (
          <Text style={styles.text2} numberOfLines={1}>
            {title}
          </Text>
        )}
        <Pressable onPress={onSharePress} style={styles.buttonWrap}>
          <ShareIcon />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
