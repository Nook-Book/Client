import { StyleSheet } from "react-native";
import { Color, Effect, Font } from "../../styles/Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  horizontalScrollView: {
    paddingHorizontal: 10,
  },
  wrap: {
    flex: 1,
    alignItems: "center",
  },
  listWrap: {
    width: 338,
    backgroundColor: Color.Field.Primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginHorizontal: 5,
  },
  inner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 16,
  },
  subText: {
    ...Font.Label.SemiMedium,
    color: Color.Typo.Primary,
    position: "absolute",
    left: 20,
  },
  mainText: {
    ...Font.Label.Medium,
    color: Color.Typo.Primary,
  },
  flatListContent: {
    paddingVertical: 19,
    paddingHorizontal: 13,
    justifyContent: "center",
  },
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
