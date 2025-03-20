import { StyleSheet } from "react-native";
import { Color, Font } from "../../Theme";

export const getStyles = (windowWidth: number) => {
  return StyleSheet.create({
    collectionMinusItem: {
      width: "44%",
      marginHorizontal: 3,
    },

    collectionImages: {
      position: "relative",
      backgroundColor: Color.Field.Primary,
      borderRadius: 3,
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
      width: "45%",
      height: 112,
      margin: 2,
    },
    collectionPlusImage: {
      width: "45%",
      height: 112,
      margin: 2,
      backgroundColor: "#C4C4C4",
      borderRadius: 3,
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
