import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  innerContainer: {
    flex: 1,
  },
  titleWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    marginBottom: 16,
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
  collectionMinusWrap: {
    marginBottom: 16,
    marginHorizontal: 13,
    flexShrink: 0,
  },
  collectionList: {
    marginBottom: 425,
  },
  flatListContent: {
    marginBottom: 16,
    justifyContent: "center",
  },
});
