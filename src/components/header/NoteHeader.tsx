import React from "react";
import { View, SafeAreaView } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import DeleteIcon from "../../assets/images/icon/Delete.svg";
import { styles } from "../../styles/header/AllNoteHeaderStyle";

export default function NoteHeader({
  navigation,
  onDelete,
}: {
  navigation: any;
  onDelete: () => void;
}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackIcon style={styles.button} onPress={() => navigation.goBack()} />
        <DeleteIcon onPress={onDelete} />
      </View>
    </SafeAreaView>
  );
}
