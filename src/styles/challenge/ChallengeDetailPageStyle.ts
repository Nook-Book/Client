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
  image: {
    width: "100%",
    height: 238,
  },
  headWrap: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  headText: {
    ...Font.Label.Large,
    color: Color.Typo.Primary,
    flexShrink: 1,
  },
  endWrap: {
    padding: 4,
    backgroundColor: Color.Contents.Badge,
  },
  endText: {
    ...Font.Paragraph.SemiSmall,
    color: Color.Secondary,
  },
  itemWrap: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    height: 35,
  },
  profileItemWrap: {
    paddingHorizontal: 16,
    flexDirection: "row",
    gap: 30,
  },
  leftWrap: {
    justifyContent: "center",
    height: 35,
  },
  rightWrap: {
    width: 230,
  },
  leftText: {
    ...Font.Label.Small,
    color: Color.Typo.Secondary,
    width: 50,
  },
  profileWrap: {
    flexDirection: "row",
    height: 35,
    gap: 15,
  },
  lengthWrap: {
    position: "absolute",
    right: 20,
    justifyContent: "center",
    height: 35,
  },
  lengthText: {
    ...Font.Label.Small,
    color: Color.Typo.Secondary,
  },
  profileItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  profileImage: {
    width: 25.75,
    height: 25.75,
    borderRadius: 100,
  },
  itemText: {
    ...Font.Label.Small,
    color: Color.Typo.Primary,
  },
  itemLightText: {
    ...Font.Paragraph.Small,
    color: Color.Typo.Primary,
  },
  itemBoldText: {
    ...Font.Heading.Small,
    color: Color.Typo.Primary,
  },
});
