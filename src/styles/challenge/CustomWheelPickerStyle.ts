import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  readTimeText: {
    ...Font.Label.Small,
    color: Color.Typo.Primary,
    paddingTop: 16,
  },
  readTimeWrap: {
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    gap: 35,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    width: 100,
  },
  itemText: {
    ...Font.Paragraph.LittleMedium,
  },
});
