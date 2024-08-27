import { StyleSheet } from "react-native";
import { Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  bottomWrap: {
    width: "100%",
    flexDirection: "row",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 72,
  },
  buttonText: {
    ...Font.Label.Medium,
  },
});
