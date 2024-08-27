import { StyleSheet } from "react-native";
import { Color, Font, Effect } from "../Theme";

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
    backgroundColor: Color.Secondary,
    borderRadius: 10,
  },
  topWrap: {
    padding: 40,
  },
  profileWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  profileImage: {
    width: 27.95,
    height: 27.95,
    borderRadius: 100,
    marginRight: 6,
  },
  profileText: {
    ...Font.Label.SemiMedium,
    marginRight: 10,
  },
  profileBtn: {
    borderColor: Color.Contents.Click,
    borderWidth: 0.8,
    borderRadius: 4,
    padding: 4,
  },
  profileBtnText: {
    ...Font.Label.Small,
    color: Color.Contents.Click,
  },
  timeText: {
    ...Font.Heading.XXL,
    color: Color.Typo.Primary,
    textAlign: "center",
    marginBottom: 25,
  },
  bookWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 4,
  },
  bookImage: {
    width: 60,
    height: 91.33,
  },
  bookTextWrap: {
    gap: 4,
    maxWidth: 156,
  },
  bookText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
  },
  bookStatusText: {
    ...Font.Label.SemiMedium,
  },
  bottomWrap: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 4,
    paddingBottom: 20,
  },
  buttonWrap: {
    paddingVertical: 4,
    paddingHorizontal: 24,
  },
  buttonText: {
    ...Font.Paragraph.SemiMedium,
  },
});
