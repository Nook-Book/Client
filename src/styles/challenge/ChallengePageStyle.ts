import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  contentContainer: {
    flex: 1,
    paddingBottom: 100,
  },
  headWrap: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headText: {
    ...Font.Label.XMedium,
    color: Color.Typo.Primary,
  },
  inviteWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 20,
    paddingTop: 4,
    paddingBottom: 16,
  },
  inviteText: {
    ...Font.Paragraph.LittleMedium,
    color: Color.Typo.Primary,
    flexShrink: 1,
  },
  challengeWrap: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
  challengeItem: {
    width: 130,
    marginRight: 16,
  },
  challengeImage: {
    width: 130,
    height: 170,
    borderRadius: 4,
  },
  challengeText: {
    ...Font.Paragraph.LittleMedium,
    color: Color.Typo.Primary,
    marginTop: 4,
  },
});
