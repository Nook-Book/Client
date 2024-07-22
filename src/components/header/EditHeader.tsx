import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { styles } from "./EditHeaderStyle";

export default function EditHeader({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Library")}>
          <Text style={styles.cancelText}>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Library")}>
          <Text style={styles.completeText}>확인</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
