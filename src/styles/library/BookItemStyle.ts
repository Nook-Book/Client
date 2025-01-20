import { StyleSheet } from "react-native";
import { Color, Effect, Font } from "../Theme";

export const getStyles = (windowWidth: number) => {
  return StyleSheet.create({
    bookItem: {
      ...Effect.ImageStandard,
      alignItems: "center",
      margin: 7,
    },
    image: {
      width: (windowWidth - 120) / 3,
      height: (windowWidth - 120) * (137 / 270),
    },
    titleText: {
      ...Font.Paragraph.XS,
      color: Color.Typo.Primary,
      maxWidth: (windowWidth - 120) / 3,
      height: 34,
      paddingHorizontal: 4,
      paddingVertical: 4,
      textAlign: "center",
    },
  });
};
