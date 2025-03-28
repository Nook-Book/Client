import { StyleSheet } from "react-native";
import { Color, Font } from "../../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  searchInput: {
    height: 40,
    margin: 16,
    padding: 12,
    borderRadius: 5,
    backgroundColor: Color.Field[15],
  },
  bookRecordContainer: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: Color.Field[15],
  },
  bookRecordItem: {
    flexDirection: "row",
    gap: 16,
    height: 128,
    padding: 16,
  },
  bookRecordImage: {
    width: 63,
    height: "100%",
    borderRadius: 5,
  },
  bookRecordInfo: {
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
  },
  bookRecordTitle: {
    ...Font.Label.SemiMedium,
    color: Color.Typo.Primary,
    top: 0,
  },

  bookRecordAuthor: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
  },
  bookRecordPublisher: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Secondary,
  },
});
