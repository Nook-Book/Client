import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  input: {
    ...Font.Paragraph.SemiMediumInput,
    backgroundColor: Color.Field[15],
    color: Color.Typo.Primary,
    borderRadius: 5,
    margin: 16,
    paddingVertical: 8.5,
    paddingHorizontal: 12,
  },
  lengthText: {
    ...Font.Paragraph.SemiSmall,
    color: Color.Typo.Primary,
    textAlign: "right",
    padding: 16,
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
  },
  participantText: {
    ...Font.Label.XMedium,
    color: Color.Typo.Primary,
  },
});
