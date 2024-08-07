import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  itemWrap: {
    height: 266,
    alignItems: "center",
    marginVertical: 16,
  },
  headText: {
    ...Font.Label.XMedium,
    color: Color.Typo.Secondary,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  boxWrap: {
    flexDirection: "row",
    borderColor: Color.Border.Stroke,
    borderWidth: 1,
    borderRadius: 2,
    alignItems: "center",
    padding: 8,
    marginVertical: 3,
    marginHorizontal: 8,
    width: 171,
  },
  leftWrap: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  backWrap: {
    borderColor: "#D9D9D9",
    borderWidth: 1,
    borderRadius: 1,
    width: 19.36,
    height: 19.36,
  },
  itemText: {
    ...Font.Paragraph.Medium,
    color: Color.Typo.Primary,
  },
});
