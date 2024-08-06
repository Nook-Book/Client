import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const markdownStyle = StyleSheet.create({
  body: {
    color: Color.Typo.Primary,
  },
  heading1: {
    ...Font.Label.Large,
    marginVertical: 4,
  },
  heading2: {
    ...Font.Label.Medium,
    marginVertical: 4,
  },
  heading3: {
    ...Font.Label.XMedium,
    marginVertical: 4,
  },
  blockquote: {
    borderLeftWidth: 0,
    borderColor: Color.Field.Primary,
    backgroundColor: Color.Field.Primary,
    borderRadius: 3,
    marginVertical: 4,
    marginLeft: 0,
    paddingHorizontal: 8,
  },
  hr: {
    backgroundColor: Color.Border.Stroke,
    marginVertical: 4,
  },
  bullet_list: {
    ...Font.Paragraph.SemiMedium,
    marginVertical: 4,
  },
  ordered_list: {
    ...Font.Paragraph.SemiMedium,
    marginVertical: 4,
  },
  strong: {
    ...Font.Label.SemiMedium,
  },
  em: {
    fontStyle: "italic",
  },
  s: {
    ...Font.Paragraph.SemiMedium,
    textDecorationLine: "line-through",
  },
  code_inline: {
    ...Font.Paragraph.SemiMedium,
    backgroundColor: "none",
    textDecorationLine: "underline",
  },
});
