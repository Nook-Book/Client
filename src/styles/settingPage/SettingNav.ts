import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: Color.Secondary,
  },
  button: {
    position: "absolute",
    left: 16,
    width: 24,
    height: 24,
  },
  text: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
  },
});
