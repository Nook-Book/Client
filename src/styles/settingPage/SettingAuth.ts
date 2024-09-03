import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    alignItems: "center",
    height: 40,
    width: "100%",
  },
  title: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
  },
});
