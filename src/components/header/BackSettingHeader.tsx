import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import SettingIcon from "../../assets/images/icon/Setting.svg";
import { styles } from "../../styles/header/BackShareHeaderStyle";
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
      <View style={styles.container}>
        <BackIcon
          onPress={() => navigation.goBack()}
          color={Color.Contents.Icon}
        />
        {isTitleVisible && <Text style={styles.text}>{title}</Text>}
        <SettingIcon onPress={onPress} />
      </View>
    </SafeAreaView>
  );
}
