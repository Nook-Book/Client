import { StyleSheet } from "react-native";
import { Color } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: "center",
    backgroundColor: Color.Secondary,
  },
  button: {
    width: 24,
    height: 24,
  },
});
