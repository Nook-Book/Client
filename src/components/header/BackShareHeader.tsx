import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import ShareIcon from "../../assets/images/icon/Share.svg";
import { styles } from "../../styles/header/BackShareHeaderStyle";
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
      <View style={styles.container}>
        <BackIcon
          onPress={() => navigation.goBack()}
          color={Color.Contents.Icon}
        />
        {isTitleVisible && <Text style={styles.text}>{title}</Text>}
        <ShareIcon onPress={onSharePress} />
      </View>
    </SafeAreaView>
  );
}
