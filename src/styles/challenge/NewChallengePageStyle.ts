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
  image: {
    width: "100%",
    height: 238,
  },
  imageBtnWrap: {
    backgroundColor: Color.Contents.Default,
    position: "absolute",
    zIndex: 10,
    right: 0,
    margin: 16,
    borderRadius: 2,
  },
  imageBtnText: {
    ...Font.Label.SemiMedium,
    color: Color.Secondary,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  headWrap: {
    padding: 16,
  },
  titleText: {
    ...Font.Label.LargeInput,
    color: Color.Typo.Primary,
  },
  itemWrap: {
    padding: 16,
    borderTopWidth: 0.8,
    borderColor: Color.Border.Stroke,
  },
  headText: {
    ...Font.Paragraph.SemiSmall,
    color: Color.Typo.Primary,
  },
  readTimeText: {
    ...Font.Label.Small,
    color: Color.Typo.Primary,
    paddingVertical: 16,
  },
  readTimeWrap: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  itemTextContainer: {
    flexDirection: "row",
    backgroundColor: Color.Field.Primary,
    borderRadius: 2,
    gap: 51,
    paddingHorizontal: 26.5,
    paddingVertical: 3,
  },
  itemGoalContainer: {
    flexDirection: "row",
    backgroundColor: Color.Field.Primary,
    borderRadius: 2,
    paddingHorizontal: 31,
    paddingVertical: 3,
    marginTop: 10,
  },
  itemText: {
    ...Font.Paragraph.LittleMedium,
    color: Color.Primary,
  },
  periodWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  periodDateWrap: {
    alignItems: "center",
    padding: 4,
  },
  periodHeadText: {
    ...Font.Label.SemiMedium,
    color: Color.Typo.Secondary,
  },
  periodDateText: {
    ...Font.Heading.Medium,
    color: Color.Typo.Primary,
  },
  readTimeHeadWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  friendBtnWrap: {
    width: "100%",
    backgroundColor: Color.Click[200],
    borderColor: Color.Border.Primary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 16,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 87,
  },
  friendBtnText: {
    ...Font.Label.SemiMedium,
    color: Color.Typo.Primary,
  },
});
