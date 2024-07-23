import { StyleSheet } from "react-native";
import { Color, Font } from "../../styles/Theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 18.5,
    paddingHorizontal: 16,
    alignItems: "center",
    backgroundColor: Color.Secondary,
  },
  cancelText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
  },
  completeText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Contents.Click,
  },
});
