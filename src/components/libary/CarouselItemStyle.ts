import { StyleSheet } from "react-native";
import { Color, Font } from "../../styles/Theme";

export const styles = StyleSheet.create({
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
});
