import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  betweenWrap: {
    flex: 1,
    justifyContent: "space-between",
  },
  pressWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 10.5,
  },
  pressText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
  },
});
