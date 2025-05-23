import { StyleSheet } from "react-native";
import { Color, Font } from "../../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
    flexDirection: "column",
    height: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  bookCountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
  },
  editActiveText: {
    color: Color.Contents.Click,
  },
  bookCountText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Secondary,
  },
  collectionDetailContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    gap: 16,
    flex: 1,
    justifyContent: "space-between",
  },
  list: {
    paddingTop: 16,
  },
  row: {
    marginBottom: 12,
    gap: 18,
  },
  editModeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Color.Contents.Click,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  moveCollectionButton: {
    backgroundColor: Color.Contents.Click,
    padding: 16,
    borderRadius: 16,
    width: "50%",
    alignItems: "center",
  },
  deleteCollectionButton: {
    backgroundColor: Color.Contents.Click,
    padding: 16,
    borderRadius: 16,
    width: "50%",
    alignItems: "center",
  },
  moveCollectionButtonText: {
    ...Font.Paragraph.Small,
    color: "white",
  },
  deleteCollectionButtonText: {
    ...Font.Paragraph.Small,
    color: "white",
  },
});
