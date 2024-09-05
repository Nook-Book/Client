import { StyleSheet } from "react-native";
import { Color, Font } from "../../Theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: Color.Secondary,
  },
  title: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
  },
  cancelButton: {
    color: Color.Typo.Primary,
  },
  okButton: {
    color: Color.Contents.Click,
  },
});
