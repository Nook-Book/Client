import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  contentContainer: {
    flex: 1,
  },
  tabViewWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabWrap: {
    width: "50%",
    alignItems: "center",
    borderBottomWidth: 2,
  },
  tabText: {
    ...Font.Heading.SemiMedium,
    paddingTop: 4,
    paddingBottom: 5,
  },
  titleInputText: {
    ...Font.Heading.XLInput,
    color: Color.Typo.Primary,
    marginTop: 16,
    height: 61,
  },
  titleText: {
    ...Font.Heading.XL,
    color: Color.Typo.Primary,
    marginTop: 24,
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
    justifyContent: "space-between",
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
});
