import React from "react";
import { View, SafeAreaView, Text, Pressable } from "react-native";
import { styles } from "../../styles/header/HeaderStyle";

export default function EditHeader({
  onCancel,
  onComplete,
}: {
  onCancel: () => void;
  onComplete: () => void;
}) {
  return (
    <SafeAreaView>
      <View style={styles.betweenContainer}>
        <Pressable onPress={onCancel} style={styles.buttonWrap}>
          <Text style={styles.text2}>취소</Text>
        </Pressable>
        <Pressable onPress={onComplete} style={styles.buttonWrap}>
          <Text style={styles.text2Blue}>완료</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
