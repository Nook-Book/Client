import { StyleSheet } from "react-native";
import { Color, Font } from "../../styles/Theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomColor: Color.Border.Stroke,
    borderBottomWidth: 0.8,
  },
  text: {
    ...Font.Label.SemiMedium,
  },
  cardContainer: {
    flexDirection: "row",
    gap: 6,
    marginTop: 10,
  },
});
