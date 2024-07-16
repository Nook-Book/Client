import { StyleSheet } from "react-native";
import { Color, Font, Effect } from "../../styles/Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    ...Font.Heading.XXXL,
    color: Color.Click[300],
  },
  image: {
    ...Effect.ImageStandard,
    width: 30,
    height: 30,
  },
});
