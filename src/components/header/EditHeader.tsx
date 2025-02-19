import React from "react";
import { View, SafeAreaView, Text, Pressable } from "react-native";
import { styles } from "../../styles/header/HeaderStyle";

export default function EditHeader({
  text,
  isTextVisible,
  onCancel,
  onComplete,
}: {
  text: string;
  isTextVisible: boolean;
  onCancel: () => void;
  onComplete: () => void;
}) {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.betweenContainer}>
        <Pressable onPress={onCancel} style={styles.buttonWrap}>
          <Text style={styles.text2}>취소</Text>
        </Pressable>
        {isTextVisible && <Text style={styles.text2}>{text}</Text>}
        <Pressable onPress={onComplete} style={styles.buttonWrap}>
          <Text style={styles.text2Blue}>완료</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
