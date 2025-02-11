import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  readTimeWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    ...Font.Paragraph.LittleMedium,
    color: Color.Primary,
  },
  timePickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 51,
  },
  timePicker: {
    width: 100,
  },
  timeGoalPickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  selectedWrap: {
    position: "absolute",
    width: 270,
    backgroundColor: Color.Field.Primary,
    borderRadius: 2,
    pointerEvents: "none",
  },
});
