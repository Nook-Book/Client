import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  moreWrap: {
    borderBottomColor: Color.Border.Stroke,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  moreText: {
    ...Font.Label.SemiMedium,
  },
  moreView: {
    borderBottomColor: Color.Border.Stroke,
  },
  moreViewText: {
    ...Font.Paragraph.SemiMedium,
    marginHorizontal: 45,
    marginVertical: 16,
  },
});
