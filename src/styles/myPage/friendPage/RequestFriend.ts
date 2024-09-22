import { StyleSheet } from "react-native";
import { Color, Font } from "../../Theme";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderTopColor: Color.Border.Stroke,
    borderTopWidth: 0.8,
  },
  label: {
    ...Font.Label.SemiMedium,
    color: Color.Typo.Primary,
  },
});
