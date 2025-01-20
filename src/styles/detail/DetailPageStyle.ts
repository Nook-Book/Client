import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  scrollWrap: {
    flex: 1,
    alignItems: "center",
  },
  mainWrap: {
    padding: 16,
    alignItems: "center",
    paddingHorizontal: 50,
  },
  image: {
    width: 150,
    height: 228,
  },
  titleText: {
    ...Font.Heading.Medium,
    color: Color.Typo.Primary,
    marginTop: 16,
    textAlign: "center",
  },
  authorText: {
    ...Font.Paragraph.Medium,
    color: Color.Typo.Primary,
    textAlign: "center",
  },
  iconWrap: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 16,
  },
  infoWrap: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    borderColor: Color.Border.Stroke,
    borderTopWidth: 0.8,
    borderBottomWidth: 0.8,
  },
  sourceWrap: {
    width: "100%",
    padding: 16,
    marginBottom: 50,
  },
  sourceLink: {
    ...Font.Paragraph.SemiSmall,
    color: Color.Contents.Click,
    textDecorationLine: "underline",
    marginBottom: 6,
  },
  sourceText: {
    ...Font.Paragraph.SemiSmall,
    color: Color.Contents.Default,
  },
});
