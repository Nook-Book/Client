import { StyleSheet } from "react-native";
import { Font } from "../Theme";

export const styles = StyleSheet.create({
  buttonWrap: {
    width: "100%",
    height: 72,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    ...Font.Label.Medium,
  },
  betweenContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
