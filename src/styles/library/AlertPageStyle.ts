import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  alertItem: {
    padding: 16,
  },
  alertText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
  },
  dateText: {
    ...Font.Paragraph.XS,
    color: Color.Typo.Secondary,
  },
});
