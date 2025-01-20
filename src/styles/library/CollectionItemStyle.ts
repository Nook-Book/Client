import { StyleSheet } from "react-native";
import { Font } from "../Theme";

export const getStyles = (windowWidth: number) => {
  return StyleSheet.create({
    collectionMinusItem: {
      width: 136,
      marginHorizontal: 3,
    },
    collectionPlusItem: {
      width: (windowWidth - 62) / 2,
      marginHorizontal: 16,
      marginBottom: 6,
    },
    collectionImages: {
      position: "relative",
    },
    collectionCover: {
      position: "absolute",
      borderRadius: 3,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      width: "100%",
      height: "100%",
      zIndex: 1,
    },
    icon: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: [{ translateX: -34.565 }, { translateY: -34.565 }],
      zIndex: 2,
    },
    imageGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 4,
      zIndex: 0,
    },
    collectionMinusImage: {
      width: 60,
      height: 91.33,
      margin: 2,
    },
    collectionPlusImage: {
      width: (windowWidth - 62) / 4 - 8,
      height: (windowWidth - 62) * (137 / 360) - 8,
      margin: 2,
    },
    textWrap: {
      marginVertical: 4,
    },
    collectionTitleText: {
      ...Font.Label.SemiMedium,
      color: "#3F474F",
    },
    collectionNumText: {
      ...Font.Paragraph.SemiMedium,
      color: "#3F474F",
    },
  });
};
