import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  itemWrap: {
    height: 266,
    alignItems: "center",
    marginVertical: 16,
  },
  boxWrap: {
    flexDirection: "row",
    justifyContent: "center",
    borderColor: Color.Border.Stroke,
    borderWidth: 1,
    borderRadius: 2,
    alignItems: "center",
    padding: 8,
    marginVertical: 3,
    marginHorizontal: 8,
    width: 358,
  },
  itemText: {
    ...Font.Paragraph.Medium,
    color: Color.Typo.Primary,
  },
});
