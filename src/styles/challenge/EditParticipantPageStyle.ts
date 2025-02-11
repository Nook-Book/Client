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
    marginRight: 3,
    position: "relative",
  },
  ownerText: {
    ...Font.Paragraph.SemiSmall,
    color: Color.Contents.Click,
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
  roleWrap: {
    position: "absolute",
    top: "-25%",
    width: 55,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: Color.Border.Primary,
    gap: 3,
    backgroundColor: Color.Secondary,
    zIndex: 5,
  },
  roleText: {
    ...Font.Paragraph.SemiSmall,
    color: Color.Typo.Primary,
  },
  roleItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "-25%",
    width: 55,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: Color.Border.Primary,
    gap: 4,
    backgroundColor: Color.Secondary,
    paddingVertical: 1.5,
  },
  roleOpenItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
    gap: 4,
  },
});
