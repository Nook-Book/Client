import { Platform, StatusBar, StyleSheet } from "react-native";
import { Color, Font } from "../../styles/Theme";

export const styles = StyleSheet.create({
  safeAreaContainer: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: Color.Secondary,
  },
  input: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8.5,
    paddingHorizontal: 12,
    backgroundColor: Color.Field[15],
    ...Font.Label.SemiMediumInput,
    borderRadius: 5,
    marginLeft: 6,
  },
  buttonContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 24,
    height: 24,
    color: Color.Contents.Icon,
  },
});
