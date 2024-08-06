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
    ...Font.Paragraph.SemiMedium,
    borderLeftColor: Color.Typo.Primary,
    backgroundColor: Color.Secondary,
    marginVertical: 4,
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
  code_block: {
    ...Font.Paragraph.SemiMedium,
    borderWidth: 0,
    backgroundColor: Color.Field.Primary,
    padding: 8,
    borderRadius: 3,
    marginVertical: 4,
  },
  fence: {
    ...Font.Paragraph.SemiMedium,
    borderWidth: 0,
    backgroundColor: Color.Field.Primary,
    padding: 8,
    borderRadius: 3,
    marginVertical: 4,
  },
  strong: {
    ...Font.Label.SemiMedium,
    marginVertical: 4,
  },
  em: {
    fontStyle: "italic",
    marginVertical: 4,
  },
  s: {
    ...Font.Paragraph.SemiMedium,
    marginVertical: 4,
  },
  code_inline: {
    ...Font.Paragraph.SemiMedium,
    backgroundColor: "none",
    textDecorationLine: "underline",
  },
});
