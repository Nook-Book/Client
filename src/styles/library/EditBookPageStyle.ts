import { StyleSheet } from "react-native";
import { Color, Font, Effect } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  numText: {
    ...Font.Label.XMedium,
    color: Color.Typo.Primary,
    textAlign: "center",
    paddingVertical: 17.5,
  },
  listWrap: {
    height: 546,
  },
  listButton: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  circle: {
    width: 6,
    height: 6,
    borderRadius: 100,
  },
  activeCircle: {
    backgroundColor: Color.Contents.Click,
  },
  inactiveCircle: {
    backgroundColor: Color.Field[20],
  },
  plusWrap: {
    alignItems: "flex-end",
    marginRight: 16,
  },
  plusButton: {
    width: 48,
    height: 48,
    borderRadius: 100,
    backgroundColor: Color.Click[100],
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#C5C5C5",
    shadowOffset: { width: 0, height: 2.09 },
    shadowOpacity: 0.25,
    shadowRadius: 3.13,
    elevation: 3.13,
  },
});
