import { StyleSheet } from "react-native";
import { Color, Font } from "../../styles/Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  titleWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  titleText: {
    ...Font.Label.Medium,
    color: "#394149",
  },
  numText: {
    ...Font.Label.XMedium,
    color: "#394149",
  },
  collectionWrap: {
    marginVertical: 16,
    marginHorizontal: 13,
  },
  collectionItem: {
    width: 136,
    position: "relative",
    marginHorizontal: 3,
  },
  collectionPlusItem: {
    width: 164,
    position: "relative",
    marginHorizontal: 13,
    marginBottom: 6,
  },
  collectionCover: {
    position: "absolute",
    borderRadius: 3,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  collectionImages: {
    position: "relative",
  },
  minusIcon: {
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
  collectionImage: {
    width: 60,
    height: 91.33,
    margin: 2,
  },
  collectionPlusImage: {
    width: 74,
    height: 112,
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
