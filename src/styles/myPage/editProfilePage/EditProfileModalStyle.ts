import { StyleSheet } from "react-native";
import { Color, Font } from "../../Theme";

export const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  container: {
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignItems: "center",
    paddingBottom: 30,
  },
  closeButton: {
    position: "absolute",
    left: 20,
    marginTop: 20,
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 3,
    marginBottom: 10,
  },
  title: {
    ...Font.Paragraph.SemiMedium,
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    width: "100%",
    padding: 12,
    borderTopWidth: 1, // 상단 보더
    borderColor: Color.Border.Stroke, // 보더 색상 (원하는 색으로 변경 가능)
  },
  buttonText: {
    color: Color.Primary,
    ...Font.Paragraph.SemiMedium,
    marginLeft: 20,
  },
  cancelButton: {
    marginTop: 10,
  },
  cancelButtonText: {
    fontSize: 16,
    color: "#007AFF",
  },
});
