import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    justifyContent: "flex-start",
    marginTop: 200,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 16,
    width: "100%",
    paddingTop: 148,
  },
  kakaoButton: {
    height: 50,
    width: "100%",
    backgroundColor: "#FEE500",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    borderRadius: 5,
  },
  kakaoButtonText: {
    ...Font.Label.SemiMedium,
  },
  bottomButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    marginTop: 20,
  },
  googleButton: {
    width: 54,
    height: 54,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: "#DDDDDD",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
