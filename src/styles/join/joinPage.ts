import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
    flexDirection: "column",
    height: "100%",
  },
  inputContainer: {
    flexDirection: "column",
    paddingHorizontal: 16,
  },
  label: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
    paddingVertical: 16,
  },
  input: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
    borderWidth: 0.8,
    borderColor: Color.Typo.Primary,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 50,
    position: "relative",
  },
  checkText: {
    ...Font.Paragraph.SemiSmall,
    color: Color.Typo.Primary,
  },
  checkButton: {
    position: "absolute",
    right: 12,
    height: 30,
    top: "18%",
    width: 68,
    borderRadius: 5,
    backgroundColor: Color.Field[20],
    justifyContent: "center",
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: Color.Click[400],
  },
  buttonText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Secondary,
  },
  activeButtonText: {
    color: Color.Secondary,
  },
  joinButton: {
    backgroundColor: Color.Field[20],
    borderRadius: 5,
    padding: 10,
    bottom: 0,
    height: 72,
    position: "absolute",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  activeJoinButton: {
    backgroundColor: Color.Click[400],
  },
  joinButtonText: {
    ...Font.Label.Medium,
    color: Color.Typo.Secondary,
  },
  activeJoinButtonText: {
    color: Color.Secondary,
  },
});
