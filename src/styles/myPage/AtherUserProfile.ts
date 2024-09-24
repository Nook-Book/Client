import { Dimensions, StyleSheet } from "react-native";
import { Color, Font } from "../Theme"; // Assuming Color and Font are defined in your Theme file

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, gap: 25 },
  profileBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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
    ...Font.Label.SemiMedium,
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

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 18,
    marginBottom: 16,
  },
  okButton: {
    width: 170,
    height: 35,
    backgroundColor: Color.Click[300],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  refuseButton: {
    width: 170,
    height: 35,
    backgroundColor: Color.Field.Background,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  okButtonText: {
    color: Color.Typo.Primary,
    ...Font.Paragraph.SemiMedium,
  },
  refuseButtonText: {
    color: Color.Typo.Secondary,
    ...Font.Paragraph.SemiMedium,
  },
  requestButton: {
    width: 358,
    height: 35,
    backgroundColor: Color.Click[100],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  requestedButton: {
    width: 358,
    height: 35,
    backgroundColor: Color.Click[300],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  friendButton: {
    width: 358,
    height: 35,
    backgroundColor: Color.Click[300],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  overlay: {
    display: "flex",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
});
