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
  delete: {
    display: "flex",
    backgroundColor: Color.Field.Primary,
    alignItems: "center",
    justifyContent: "center",
    width: 93,
    height: 40,
  },
  text: {
    ...Font.Paragraph.LittleMedium,
  },
});
