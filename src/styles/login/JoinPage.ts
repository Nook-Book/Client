import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  contentContainer: {
    padding: 16,
  },
  label: {
    ...Font.Paragraph.SemiSmall,
    color: Color.Typo.Primary,
    paddingVertical: 16,
  },
  nameLabel: {
    ...Font.Paragraph.SemiSmall,
    color: Color.Typo.Primary,
    paddingVertical: 16,
    marginTop: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    borderColor: Color.Border.Primary,
    borderWidth: 1,
    padding: 12,
  },
  inputFocused: {
    borderColor: Color.Typo.Primary,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    right: 12,
    width: 68,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "rgba(104, 104, 104, 0.2)",
  },
  buttonFocused: {
    backgroundColor: Color.Click[400],
  },
  notice: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
    height: 16,
  },
  text: {
    ...Font.Label.SemiMedium,
    color: Color.Typo.Secondary,
  },
  textFocused: {
    color: Color.Secondary,
  },
});
