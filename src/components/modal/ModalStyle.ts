import { StyleSheet } from "react-native";
import { Color, Font, Effect } from "../../styles/Theme";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 200,
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
  contentText: {
    ...Font.Paragraph.LittleMedium,
    textAlign: "center",
    color: Color.Contents.Icon,
    marginTop: 24,
    marginBottom: 35,
  },
  buttonWrap: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  blueText: {
    ...Font.Paragraph.Medium,
    color: Color.Contents.Click,
  },
  grayText: {
    ...Font.Paragraph.Medium,
    color: Color.Typo.Primary,
    marginLeft: 32,
  },
});
