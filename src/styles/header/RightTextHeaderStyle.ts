import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
    backgroundColor: Color.Secondary,
  },
  text: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Contents.Click,
  },
});
