import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  contentContainer: {
    flex: 1,
  },
  periodWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 0.8,
    borderColor: Color.Border.Stroke,
    padding: 16,
  },
  periodDateWrap: {
    alignItems: "center",
    padding: 4,
    minWidth: 130,
  },
  periodHeadText: {
    ...Font.Label.SemiMedium,
    color: Color.Typo.Secondary,
  },
  periodDateText: {
    ...Font.Heading.Medium,
    color: Color.Typo.Primary,
  },
  buttonWrap: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    ...Font.Label.Medium,
  },
});
