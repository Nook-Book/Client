import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  betweenContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.Secondary,
    height: 56,
  },
  centerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.Secondary,
    height: 56,
  },
  rightContainer: {
    alignItems: "flex-end",
    backgroundColor: Color.Secondary,
    height: 56,
  },
  rightOneContainer: {
    padding: 16,
    alignItems: "flex-end",
    backgroundColor: Color.Secondary,
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Color.Secondary,
    height: 56,
    paddingLeft: 16,
  },
  buttonWrap: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  leftTextButtonWrap: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  leftButtonWrap: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
  },
  centerText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
    justifyContent: "center",
    textAlign: "center",
    flex: 1,
    paddingHorizontal: 5,
  },
  text1: {
    ...Font.Label.XMedium,
    color: Color.Typo.Primary,
    justifyContent: "center",
    textAlign: "center",
  },
  text2: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
    justifyContent: "center",
    textAlign: "center",
  },
  text2Blue: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Contents.Click,
    justifyContent: "center",
    textAlign: "center",
  },
});
