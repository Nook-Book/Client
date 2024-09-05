import React from "react";
import { View, SafeAreaView, Pressable } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import DeleteIcon from "../../assets/images/icon/Delete.svg";
import { styles } from "../../styles/header/HeaderStyle";
import { Color } from "../../styles/Theme";

export default function NoteHeader({
  navigation,
  onDelete,
}: {
  navigation: any;
  onDelete: () => void;
}) {
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
          onPress={() => navigation.goBack()}
          style={styles.buttonWrap}
        >
          <DeleteIcon onPress={onDelete} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
