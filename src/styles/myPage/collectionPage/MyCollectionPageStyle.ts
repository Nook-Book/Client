import { StyleSheet } from "react-native";
import { Color, Font } from "../../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
    height: "100%",
  },
  collectionNav: {
    display: "flex",
    flexDirection: "row",
    gap: 32,
    padding: 16,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttonText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
  },
  collectionContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  label: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
  },
  lobel_Bold: {
    fontFamily: "SCDream6",
  },
  collectionList: {
    marginTop: 16,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
});
