import { Dimensions, StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

const { width: windowWidth } = Dimensions.get("window");

export const styles = StyleSheet.create({
  listWrap: {
    width: windowWidth - 52,
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
  flatListWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatList: {
    width: 312,
  },
  flatListContent: {
    paddingVertical: 19,
  },
});
