import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  dateText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Secondary,
  },
  titleText: {
    ...Font.Heading.XL,
    marginTop: 16,
    color: Color.Typo.Primary,
  },
  contentText: {
    ...Font.Paragraph.SemiMedium,
  },
});
