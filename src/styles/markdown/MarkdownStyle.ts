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
    marginVertical: 4,
    gap: 4,
  },
  ordered_list: {
    marginVertical: 4,
    gap: 4,
  },
  strong: {
    fontWeight: "600",
  },
  em: {
    //이탤릭체 폰트 추가 필요
    fontStyle: "italic",
  },
  s: {
    textDecorationLine: "line-through",
  },
  code_inline: {
    backgroundColor: "none",
    textDecorationLine: "underline",
  },
});
