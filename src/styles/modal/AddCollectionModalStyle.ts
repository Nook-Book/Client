import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1000,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: Color.Secondary,
    padding: 20,
    borderRadius: 5,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "40%",
  },

  modalTitle: {
    ...Font.Label.Medium,
    color: Color.Typo.Primary,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginTop: 16,
    borderColor: Color.Border.Stroke,
    width: "100%",
    padding: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 35,
    gap: 32,
  },
  button: {
    width: "auto",
    height: "auto",
  },
  buttonText: {
    ...Font.Paragraph.Medium,
    color: Color.Typo.Primary,
  },
});
