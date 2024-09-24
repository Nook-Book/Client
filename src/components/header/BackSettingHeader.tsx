import React from "react";
import { View, SafeAreaView, Text, Pressable } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import SettingIcon from "../../assets/images/icon/Setting.svg";
import { styles } from "../../styles/header/HeaderStyle";
import { Color } from "../../styles/Theme";

export default function BackSettingHeader({
  title,
  isTitleVisible,
  navigation,
  onPress,
}: {
  title: string;
  isTitleVisible: boolean;
  navigation: any;
  onPress: () => void;
}) {
  return (
    <SafeAreaView>
      <View style={styles.betweenContainer}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.buttonWrap}
        >
          <BackIcon color={Color.Contents.Icon} />
        </Pressable>
        {isTitleVisible && <Text style={styles.text2}>{title}</Text>}
        <Pressable onPress={onPress} style={styles.buttonWrap}>
          <SettingIcon />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
