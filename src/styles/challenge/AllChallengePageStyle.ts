import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const getStyles = (windowWidth: number) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.Secondary,
    },
    contentContainer: {
      flex: 1,
      paddingBottom: 100,
    },
    lengthText: {
      ...Font.Label.XMedium,
      color: Color.Typo.Primary,
      textAlign: "right",
      padding: 20,
    },
    itemWrap: {
      width: windowWidth / 3,
    },
    itemImage: {
      width: windowWidth / 3,
      height: (windowWidth / 3 / 13) * 17,
    },
    itemText: {
      ...Font.Paragraph.LittleMedium,
      color: Color.Typo.Primary,
      paddingVertical: 4,
    },
  });
};
