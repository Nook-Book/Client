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
  headText: {
    ...Font.Label.SemiMedium,
    color: Color.Typo.Primary,
    padding: 16,
  },
  calendarWrap: {
    marginHorizontal: 16,
  },
  calendar: {
    borderRadius: 5,
    marginBottom: 16,
    backgroundColor: Color.Field[15],
    paddingTop: 7,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  dateWrap: {
    borderRadius: 5,
    backgroundColor: Color.Field[15],
    marginBottom: 32,
    padding: 14,
    gap: 10,
  },
  dateText: {
    ...Font.Label.Medium,
    color: Color.Typo.Primary,
    textAlign: "center",
  },
  dateItemHeadText: {
    ...Font.Paragraph.SemiMedium,
    paddingHorizontal: 2,
    color: Color.Contents.Click,
  },
  dateItemText: {
    ...Font.Label.Large,
    paddingHorizontal: 2,
    color: Color.Typo.Primary,
  },
  dateItemWrap: {
    flexDirection: "row",
    gap: 35,
  },
  dateBookItemWrap: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,
  },
  dateBookWrap: {
    gap: 8,
  },
  dateBookImage: {
    width: 60,
    height: 91.33,
  },
  dateBookText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
    paddingVertical: 2,
    flexShrink: 1,
  },
});
