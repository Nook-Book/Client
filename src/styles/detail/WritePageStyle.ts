import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 16,
  },
  titleText: {
    ...Font.Heading.XLInput,
    marginTop: 16,
    color: Color.Typo.Primary,
  },
  contentText: {
    ...Font.Paragraph.SemiMedium,
  },
  fixedWrap: {
    backgroundColor: Color.Secondary,
  },
  menuWrap: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: Color.Border.Stroke,
    borderTopWidth: 0.8,
    borderBottomWidth: 0.8,
    height: 51,
    paddingHorizontal: 16,
  },
  menuView: {
    flexDirection: "row",
    gap: 20,
    marginRight: 10,
  },
  keyboredWrap: {
    borderColor: Color.Border.Stroke,
    borderLeftWidth: 0.8,
    paddingLeft: 10,
  },
  itemWrap: {
    height: 266,
    alignItems: "center",
    marginVertical: 16,
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
  },
  itemText: {
    ...Font.Paragraph.Medium,
    color: Color.Typo.Primary,
  },
});
