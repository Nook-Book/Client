import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: Color.Secondary,
  },
  button: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 20,
  },
  text1: {
    ...Font.Label.XMedium,
    color: Color.Typo.Primary,
    justifyContent: "center",
    textAlign: "center",
  },
  text2: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
    justifyContent: "center",
    textAlign: "center",
  },
});
