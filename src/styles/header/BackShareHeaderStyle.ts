import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
    backgroundColor: Color.Secondary,
  },
  text: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
  },
});
