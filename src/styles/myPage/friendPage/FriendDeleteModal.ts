import { StyleSheet } from "react-native";
import { Color, Font } from "../../Theme";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 340,
    height: 177,
    left: "50%",
    top: "50%",
    display: "flex",
    alignItems: "center",
    paddingTop: 48,
    zIndex: 3,
    backgroundColor: "#ffffff",
    transform: [{ translateX: -170 }, { translateY: -85 }],
    borderRadius: 8,

    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },

  title: {
    ...Font.Label.Medium,
    color: Color.Typo.Primary,
  },
  content: {
    ...Font.Paragraph.LittleMedium,
    color: Color.Contents.Icon,
    marginTop: 4,
    display: "flex",
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 35,
    display: "flex",
    flexDirection: "row",
    gap: 32,
    left: 100,
  },
  cancelButton: {
    ...Font.Paragraph.Medium,
    color: Color.Contents.Click,
  },
  okButton: {
    ...Font.Paragraph.Medium,
    color: Color.Typo.Primary,
  },
});
