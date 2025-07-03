import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.Secondary,
    flex: 1,
  },
  text: {
    ...Font.Label.SemiMedium,
  },
  categoryContainer: {
    borderBottomColor: Color.Border.Stroke,
    borderBottomWidth: 0.8,
  },
  keywordContainer: {
    paddingHorizontal: 16,
    flexDirection: "row",
    gap: 6,
    marginTop: 16,
    marginBottom: 16,
  },
});
