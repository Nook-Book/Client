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
  keywordContainer: {
    paddingHorizontal: 16,
    flexDirection: "row",
    gap: 6,
    marginTop: 10,
    marginBottom: 10,
  },
});
