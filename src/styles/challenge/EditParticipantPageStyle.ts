import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  betweenWrap: {
    flex: 1,
  },
  headText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Secondary,
    marginTop: 16,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  plusIcon: {
    width: 24,
    height: 24,
    color: Color.Contents.Icon,
  },
  participantWrap: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Color.Secondary,
  },
  participantImage: {
    width: 40.67,
    height: 40.67,
    borderRadius: 100,
    backgroundColor: Color.Field.Primary,
    justifyContent: "center",
    alignItems: "center",
  },
  participantText: {
    ...Font.Label.XMedium,
    color: Color.Typo.Primary,
    marginLeft: 9,
  },
  ownerText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
    marginLeft: 6,
  },
  rowBack: {
    alignItems: "flex-end",
    backgroundColor: Color.Field.Primary,
    flex: 1,
    justifyContent: "center",
    paddingRight: 20,
    marginVertical: 8,
  },
  rowBackText: {
    ...Font.Paragraph.LittleMedium,
    color: Color.Typo.Primary,
  },
});
