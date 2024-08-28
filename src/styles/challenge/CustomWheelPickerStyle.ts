import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  readTimeText: {
    ...Font.Label.Small,
    color: Color.Typo.Primary,
    paddingTop: 16,
  },
  readTimeWrap: {
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    gap: 35,
  },
  itemText: {
    ...Font.Paragraph.LittleMedium,
    color: Color.Typo.Primary,
  },
  selectedWrap: {
    width: 270,
    height: 28,
    borderRadius: 2,
    backgroundColor: Color.Field.Primary,
    position: "absolute",
    zIndex: 1,
  },
});
