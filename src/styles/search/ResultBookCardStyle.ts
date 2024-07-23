import { StyleSheet } from "react-native";
import { Color, Font } from "../../styles/Theme";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    marginTop: 16,
  },
  cardConatiner: {
    display: "flex",
    justifyContent: "space-between",
  },
  image: {
    width: 63,
    height: 96,
  },
  title: {
    ...Font.Label.SemiMedium,
    color: Color.Typo.Primary,
    maxWidth: 250,
  },
  artist: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
    maxWidth: 250,
  },
  publisher: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Secondary,
    maxWidth: 250,
  },
});
