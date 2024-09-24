import { StyleSheet } from "react-native";
import { Color, Font } from "../../Theme";

export const styles = StyleSheet.create({
  delete: {
    display: "flex",
    backgroundColor: Color.Field.Primary,
    alignItems: "center",
    justifyContent: "center",
    width: 93,
    height: 40,
  },
  text: {
    ...Font.Paragraph.LittleMedium,
  },
});
