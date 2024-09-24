import { Dimensions, StyleSheet } from "react-native";
import { Color, Font } from "../Theme"; // Assuming Color and Font are defined in your Theme file

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  profileImage: {
    width: 84,
    height: 84,
    borderRadius: 30,
    marginRight: 12,
  },
  profileContainer: {
    flex: 1,
    flexDirection: "column",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    marginRight: 2,
    ...Font.Label.Medium,
  },
  email: {
    ...Font.Label.SemiMedium,
    color: Color.Typo.Primary,
  },
  friendContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  friendName: {
    ...Font.Label.SemiMedium,
    marginRight: 5,
  },
  friendNumber: {
    color: Color.Contents.Click,
  },
  friendButton: {
    width: 93,
    height: 39,
    backgroundColor: Color.Click[300],
    borderColor: Color.Border.Stroke,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
  },
});
