import { StyleSheet } from "react-native";
import { Color, Effect, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 16,
  },
  bookWrap: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: 16,
  },
  bookImage: {
    ...Effect.ImageStandard,
    width: 90,
    height: 137,
    borderRadius: 3,
  },
  bookText: {
    ...Font.Heading.Large,
    color: Color.Typo.Primary,
    marginLeft: 18,
    flexShrink: 1,
  },
  lengthText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Secondary,
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 16,
  },
  noteWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
    borderColor: Color.Border.Stroke,
    borderTopWidth: 0.8,
    borderBottomWidth: 0.8,
    gap: 10,
  },
  titleWrap: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    flex: 1,
  },
  titleText: {
    ...Font.Label.XMedium,
    color: Color.Typo.Primary,
    flexShrink: 1,
  },
  dateText: {
    ...Font.Paragraph.LittleMedium,
    color: Color.Typo.Secondary,
  },
});
