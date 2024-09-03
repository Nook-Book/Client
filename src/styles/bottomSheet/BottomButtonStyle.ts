import { StyleSheet } from "react-native";
import { Font } from "../Theme";

export const styles = StyleSheet.create({
  buttonWrap: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    ...Font.Label.Medium,
  },
});
