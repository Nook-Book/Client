import { StyleSheet } from "react-native";
import { Color, Font } from "../../styles/Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    width: 110,
    height: 169,
    backgroundColor: Color.Field.Primary,
    borderRadius: 5,
  },
  idContainer: {
    ...Font.Label.SemiMedium,
    color: Color.Secondary,
    backgroundColor: Color.Contents.Click,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  id: {
    color: Color.Secondary,
    backgroundColor: Color.Contents.Click,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: 76,
    height: 111,
    marginTop: 24,
  },
  title: {
    marginTop: 5,
    marginLeft: 8,
    ...Font.Label.Small,
    color: Color.Typo.Primary,
    maxWidth: 100,
  },
  name: {
    marginLeft: 8,
    ...Font.Paragraph.Small,
    color: Color.Typo.Primary,
    maxWidth: 100,
  },
});
