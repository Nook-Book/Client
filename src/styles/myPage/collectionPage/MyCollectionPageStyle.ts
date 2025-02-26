import { StyleSheet } from "react-native";
import { Color, Font } from "../../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  collectionNav: {
    display: "flex",
    flexDirection: "row",
    gap: 32,
    padding: 16,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttonText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
  },
  collectionContainer: {
    flex: 1,
    padding: 16,
  },
  label: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
  },
  lobel_Bold: {
    fontFamily: "SCDream6",
  },
});
