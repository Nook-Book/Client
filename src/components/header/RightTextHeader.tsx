import React from "react";
import { View, SafeAreaView, Text, Pressable } from "react-native";
import { styles } from "../../styles/header/HeaderStyle";

export default function RightTextHeader({ onPress }: { onPress: () => void }) {
  return (
    <SafeAreaView>
      <View
        style={[
          styles.rightContainer,
          {
            paddingRight: 16,
          },
        ]}
      >
        <Pressable onPress={onPress} style={styles.buttonWrap}>
          <Text style={styles.text2Blue}>전체보기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
