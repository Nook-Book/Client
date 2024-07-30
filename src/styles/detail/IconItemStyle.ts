import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  iconWrapItem: {
    borderLeftColor: Color.Border.Stroke,
    borderLeftWidth: 0.8,
    alignItems: "center",
    flex: 1,
  },
  iconText: {
    ...Font.Paragraph.Small,
  },
});
