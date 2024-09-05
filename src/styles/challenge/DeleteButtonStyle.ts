import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  buttonWrap: {
    backgroundColor: Color.Click[200],
    borderWidth: 1,
    borderColor: Color.Border.Primary,
    marginHorizontal: 16,
    marginBottom: 34,
    borderRadius: 5,
  },
  buttonText: {
    ...Font.Label.SemiMedium,
    color: Color.Typo.Primary,
    padding: 16,
    textAlign: "center",
  },
});
