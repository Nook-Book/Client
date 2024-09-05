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
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
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
  },
  ownerText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
    marginLeft: -6,
  },
});
