import { StyleSheet } from "react-native";
import { Color, Font } from "../../Theme";

export const styles = StyleSheet.create({
  friendContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: 53,
    alignItems: "center",
  },
  friendButton: {
    width: "50%",
    height: 53,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: Color.Border.Stroke,
  },
  friendButtonText: {
    ...Font.Label.XMedium,
    color: Color.Typo.Primary,
  },
});
