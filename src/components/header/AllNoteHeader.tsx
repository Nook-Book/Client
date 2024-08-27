import React from "react";
import { View, SafeAreaView } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import NoteIcon from "../../assets/images/icon/Note.svg";
import { styles } from "../../styles/header/AllNoteHeaderStyle";
import { Color } from "../../styles/Theme";

export default function AllNoteHeader({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackIcon
          style={styles.button}
          onPress={() => navigation.goBack()}
          color={Color.Contents.Icon}
        />
        <NoteIcon onPress={() => navigation.navigate("Write")} />
      </View>
    </SafeAreaView>
  );
}
