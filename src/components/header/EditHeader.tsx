import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/header/EditHeaderStyle";

export default function EditHeader({
  navigation,
  onComplete,
}: {
  navigation: any;
  onComplete: () => void;
}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Library")}>
          <Text style={styles.cancelText}>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onComplete}>
          <Text style={styles.completeText}>완료</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
