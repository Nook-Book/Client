import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const markdownStyle = StyleSheet.create({
  body: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
  },
  heading1: {
    ...Font.Label.Large,
    marginVertical: 10,
  },
  heading2: {
    ...Font.Label.Medium,
    marginVertical: 10,
  },
  heading3: {
    ...Font.Label.XMedium,
    marginVertical: 10,
  },
  blockquote: {
    borderLeftColor: Color.Typo.Primary,
    backgroundColor: Color.Secondary,
    paddingVertical: -20,
    marginVertical: 10,
  },
  code_inline: {
    backgroundColor: Color.Typo.Primary,
    color: Color.Border.Stroke,
  },
  hr: {
    backgroundColor: Color.Border.Stroke,
  },
  code_block: {
    ...Font.Paragraph.SemiMedium,
    borderWidth: 0,
    backgroundColor: Color.Field.Primary,
    padding: 8,
    borderRadius: 3,
  },
  fence: {
    ...Font.Paragraph.SemiMedium,
    borderWidth: 0,
    backgroundColor: Color.Field.Primary,
    padding: 8,
    borderRadius: 3,
  },
});
