import { StyleSheet } from "react-native";
import { Color, Font } from "../../styles/Theme";

export const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  text: {
    ...Font.Label.SemiMedium,
  },
  button: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Contents.Click,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 9,
  },
});
