import { StyleSheet } from "react-native";
import { Color, Font, Effect } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 200,
  },
  modal: {
    backgroundColor: Color.Secondary,
    marginHorizontal: 54,
    marginBottom: 54,
    borderRadius: 5,
  },
  logoWrap: {
    alignItems: "flex-end",
    padding: 24,
  },
  centeredView: {
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  imageWrap: {
    ...Effect.ImageStandard,
  },
  bookImage: {
    width: 150,
    height: 228,
  },
  titleText: {
    ...Font.Heading.Medium,
    color: Color.Typo.Primary,
    marginTop: 26,
  },
  authorText: {
    ...Font.Paragraph.Medium,
    color: Color.Typo.Primary,
  },
  bottom: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: Color.Secondary,
    paddingBottom: 34,
  },
  topWrap: {
    paddingVertical: 19,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: Color.Border.Stroke,
    borderBottomWidth: 0.8,
  },
  closeIcon: {
    position: "absolute",
    left: 16,
  },
  headText: {
    ...Font.Label.SemiMedium,
    color: Color.Typo.Primary,
    justifyContent: "center",
    textAlign: "center",
  },
  shareWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomColor: Color.Border.Stroke,
    borderBottomWidth: 0.8,
  },
  shareText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
  },
});
