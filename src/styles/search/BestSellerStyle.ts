import { StyleSheet } from "react-native";
import { Color, Font } from "../../styles/Theme";

export const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
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
    gap: 14,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  bestSellerContainer: {
    marginBottom: 100,
  },
});
