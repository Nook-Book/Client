import { StyleSheet } from "react-native";
import { Color, Font } from "../../styles/Theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.Secondary,
    borderColor: Color.Border.Primary,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 6,
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  text: {
    ...Font.Paragraph.SemiMedium,
  },
  button: {
    width: 4,
    height: 4,
  },
});
