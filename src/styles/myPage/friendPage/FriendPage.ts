import { StyleSheet } from "react-native";
import { Color, Font } from "../../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  friendContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: 53,
    alignItems: "center",
  },
  friendButton: {
    width: "50%",
    height: 53,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: Color.Border.Stroke,
  },
  friendButtonText: {
    ...Font.Label.XMedium,
    color: Color.Typo.Primary,
  },
  input: {
    alignItems: "center",
    paddingVertical: 8.5,
    paddingHorizontal: 12,
    backgroundColor: Color.Field[15],
    ...Font.Label.SemiMedium,
    borderRadius: 5,
    margin: 16,
    height: 36,
  },
  overlay: {
    display: "flex",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
});
