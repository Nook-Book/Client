import { StyleSheet } from "react-native";
import { Color, Font, Effect } from "../../styles/Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modal: {
    ...Effect.ModalShadow,
    borderRadius: 5,
    backgroundColor: Color.Secondary,
    paddingVertical: 24,
    paddingHorizontal: 16,
    width: "88%",
    maxWidth: 340,
  },
  headText: {
    ...Font.Label.Medium,
    color: Color.Typo.Primary,
    marginTop: 24,
    textAlign: "center",
  },
  headTimeText: {
    ...Font.Label.Medium,
    color: Color.Typo.Primary,
    textAlign: "center",
  },
  timePickerWrap: {
    marginTop: 20,
    marginBottom: 34,
  },
  desText: {
    ...Font.Paragraph.LittleMedium,
    color: Color.Contents.Icon,
    marginTop: 4,
    marginBottom: 35,
    textAlign: "center",
  },
  contentText: {
    ...Font.Paragraph.LittleMedium,
    textAlign: "center",
    color: Color.Contents.Icon,
    marginTop: 24,
    marginBottom: 35,
  },
  titleText: {
    ...Font.Label.Medium,
    textAlign: "center",
    color: Color.Typo.Primary,
    marginBottom: 16,
  },
  warningTitleText: {
    ...Font.Label.Medium,
    textAlign: "center",
    color: Color.Typo.Primary,
    marginTop: 24,
    marginBottom: 16,
  },
  warningContentText: {
    ...Font.Paragraph.LittleMedium,
    textAlign: "center",
    color: Color.Contents.Icon,
  },
  warningText: {
    ...Font.Paragraph.Small,
    textAlign: "center",
    color: Color.Contents.Icon,
    marginBottom: 35,
  },
  buttonWrap: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 32,
  },
  blueText: {
    ...Font.Paragraph.Medium,
    color: Color.Contents.Click,
  },
  grayText: {
    ...Font.Paragraph.Medium,
    color: Color.Typo.Primary,
  },
  input: {
    ...Font.Paragraph.SemiMediumInput,
    paddingHorizontal: 4,
    paddingVertical: 13,
    borderColor: Color.Border.Stroke,
    borderWidth: 1,
    borderRadius: 2,
    marginBottom: 35,
    alignItems: "center",
    color: Color.Typo.Primary,
  },
});
