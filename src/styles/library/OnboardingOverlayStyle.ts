import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  overlayTouch: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 1000,
  },
  overlayContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  overlayText: {
    ...Font.Label.Medium,
    textAlign: "center",
    marginTop: 14,
    color: Color.Secondary,
  },
});
