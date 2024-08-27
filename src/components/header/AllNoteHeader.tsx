import React from "react";
import { View, SafeAreaView } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import NoteIcon from "../../assets/images/icon/Note.svg";
import { styles } from "../../styles/header/AllNoteHeaderStyle";

export default function AllNoteHeader({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackIcon style={styles.button} onPress={() => navigation.goBack()} />
        <NoteIcon onPress={() => navigation.navigate("Write")} />
      </View>
    </SafeAreaView>
  );
}
