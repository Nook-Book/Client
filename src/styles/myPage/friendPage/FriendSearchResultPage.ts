import { StyleSheet } from "react-native";
import { Color, Font } from "../../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  readingActivityContainer: {
    borderTopWidth: 1,
    borderTopColor: Color.Border.Stroke,
  },
  HeaderContainer: {
    padding: 16,
  },
  activityHeader: {
    ...Font.Label.Medium,
    color: Color.Typo.Primary,
  },
  linkIconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  linkIconContainerComponent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 195,
    height: 106,
  },
  linkIconContainerComponentText: {
    ...Font.Label.SemiMedium,
    color: Color.Typo.Primary,
  },
  linkIconBorder: {
    borderLeftWidth: 1,
    borderLeftColor: Color.Border.Stroke,
    height: 106,
  },
  linkActivityContainer: {
    borderTopWidth: 1,
    borderTopColor: Color.Border.Stroke,
    marginTop: 16,
  },
  categoryHeader: {
    ...Font.Label.SemiMedium,
    color: Color.Typo.Primary,
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
