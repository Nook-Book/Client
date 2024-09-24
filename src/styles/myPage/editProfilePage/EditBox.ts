import { StyleSheet } from "react-native";
import { Color } from "../../Theme";

export const styles = StyleSheet.create({
  container: {
    height: 70,
    padding: 16,
    justifyContent: "center",
  },
  textBox: {
    width: "100%",
    height: 38,
    paddingTop: 16,
    borderBottomColor: Color.Border.Stroke,
    borderBottomWidth: 0.8,
  },
});
