import { StyleSheet } from "react-native";
import { Color, Font } from "../../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  inputContainer: {
    width: "100%",
    height: 70,
    padding: 16,
    display: "flex",
    flexDirection: "row",
    paddingTop: 16,
    alignItems: "center",
  },
  textInput: {
    height: 38,
    width: "95%",
    borderBottomWidth: 0.8,
    borderBottomColor: Color.Border.Stroke,
    ...Font.Label.SemiMedium,
    color: Color.Typo.Primary,
  },
});
