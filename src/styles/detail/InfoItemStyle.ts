import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  infoWrapItem: {
    borderLeftColor: Color.Border.Stroke,
    borderLeftWidth: 0.8,
    paddingVertical: 16,
    alignItems: "center",
    flex: 1,
  },
  infoWrapItemTitleText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Secondary,
  },
  infoWrapItemContentText: {
    ...Font.Label.SemiMedium,
    color: Color.Typo.Primary,
  },
});
