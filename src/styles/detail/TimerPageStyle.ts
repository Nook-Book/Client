import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  timeText: {
    ...Font.Heading.XXXL,
    marginTop: 32,
    marginBottom: 16,
    color: Color.Typo.Primary,
    textAlign: "center",
  },
  betweenWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
  },
  accumulatedHeadText: {
    ...Font.Label.Medium,
    color: Color.Typo.Primary,
  },
  accumulatedText: {
    ...Font.Paragraph.Medium,
    color: Color.Typo.Primary,
  },
  timerButton: {
    width: 86,
    height: 86,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  timerText: {
    ...Font.Label.Large,
  },
  recordWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
    borderColor: Color.Border.Stroke,
    borderTopWidth: 0.8,
    borderBottomWidth: 0.8,
  },
  recordDateText: {
    ...Font.Label.SemiMedium,
    color: Color.Typo.Primary,
  },
  recordTimeText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
    marginTop: 4,
  },
  recordDurationText: {
    ...Font.Label.XMedium,
    color: Color.Typo.Primary,
  },
});
