import React from "react";
import { View, SafeAreaView, Text, Pressable } from "react-native";
import { styles } from "../../styles/header/RightTextHeaderStyle";

export default function RightTextHeader({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate("AllChallenge")}>
          <Text style={styles.text}>전체보기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
