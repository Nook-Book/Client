import { StyleSheet } from "react-native";
import { Color, Effect, Font } from "../Theme";

export const styles = StyleSheet.create({
  bookItem: {
    ...Effect.ImageStandard,
    alignItems: "center",
    margin: 7,
  },
  image: {
    width: 90,
    height: 137,
  },
  titleText: {
    ...Font.Paragraph.XS,
    color: Color.Typo.Primary,
    maxWidth: 90,
    height: 34,
    paddingHorizontal: 4,
    paddingVertical: 4,
    textAlign: "center",
  },
});
