import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const getStyles = (windowWidth: number) => {
  return StyleSheet.create({
    itemWrap: {
      height: 260,
      alignItems: "center",
      marginVertical: 16,
    },
    boxWrap: {
      flexDirection: "row",
      borderColor: Color.Border.Stroke,
      borderWidth: 1,
      borderRadius: 2,
      alignItems: "center",
      padding: 8,
      marginVertical: 3,
      marginHorizontal: 8,
      width: windowWidth / 2 - 24,
    },
    itemText: {
      ...Font.Paragraph.Medium,
      color: Color.Typo.Primary,
    },
  });
};
