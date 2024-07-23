import { StyleSheet } from "react-native";
import { Color, Font } from "../../styles/Theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.Secondary,
    flex: 1,
  },
  text: {
    ...Font.Label.SemiMedium,
  },
  cardContainer: {
    flexDirection: "column",
    gap: 6,
    marginTop: 10,
    marginLeft: 30,
    marginBottom: 100,
  },
  separator: {
    height: 1,
    backgroundColor: Color.Border.Stroke,
    marginTop: 10,
  },
});
