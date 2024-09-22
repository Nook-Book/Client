import { StyleSheet } from "react-native";
import { Color, Font } from "../../Theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    gap: 9,
  },
  name: {
    ...Font.Label.XMedium,
    color: Color.Typo.Primary,
  },
});
