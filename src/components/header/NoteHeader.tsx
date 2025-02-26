import React from "react";
import { View, SafeAreaView, Pressable } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import EditIcon from "../../assets/images/icon/Edit.svg";
import DeleteIcon from "../../assets/images/icon/Delete.svg";
import { styles } from "../../styles/header/HeaderStyle";
import { Color } from "../../styles/Theme";

export default function NoteHeader({
  navigation,
  onEdit,
  onDelete,
}: {
  navigation: any;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.betweenContainer}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.buttonWrap}
        >
          <BackIcon color={Color.Contents.Icon} />
        </Pressable>
        <View style={{ flexDirection: "row", marginRight: 9 }}>
          <Pressable onPress={onEdit} style={styles.buttonSmallWrap}>
            <EditIcon />
          </Pressable>
          <Pressable onPress={onDelete} style={styles.buttonSmallWrap}>
            <DeleteIcon />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
