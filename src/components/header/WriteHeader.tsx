import React from "react";
import { View, SafeAreaView, Pressable } from "react-native";
import CancelIcon from "../../assets/images/icon/Cancel.svg";
import CheckIcon from "../../assets/images/icon/Check.svg";
import { styles } from "../../styles/header/HeaderStyle";

export default function WriteHeader({
  isText,
  onCheckPress,
  onCancelPress,
}: {
  isText: boolean;
  onCheckPress: () => void;
  onCancelPress: () => void;
}) {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.rightContainer}>
        {isText ? (
          <Pressable onPress={onCheckPress} style={styles.buttonWrap}>
            <CheckIcon />
          </Pressable>
        ) : (
          <Pressable onPress={onCancelPress} style={styles.buttonWrap}>
            <CancelIcon />
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}
