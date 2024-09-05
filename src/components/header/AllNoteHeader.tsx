import React from "react";
import { View, SafeAreaView, Pressable } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import NoteIcon from "../../assets/images/icon/Note.svg";
import { styles } from "../../styles/header/HeaderStyle";
import { Color } from "../../styles/Theme";

export default function AllNoteHeader({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView>
      <View style={styles.betweenContainer}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.buttonWrap}
        >
          <BackIcon color={Color.Contents.Icon} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Write")}
          style={styles.buttonWrap}
        >
          <NoteIcon />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
