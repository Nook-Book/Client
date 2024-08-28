import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 280,
    backgroundColor: Color.Secondary,
    borderRadius: 10,
    alignItems: "center",
  },
  modalButton: {
    padding: 13,
    width: "95%",
    alignItems: "center",
    borderBottomWidth: 0.8,
    borderColor: Color.Border.Stroke,
  },
  modalButtonText: {
    ...Font.Label.XMedium,
    color: Color.Typo.Primary,
  },
});
