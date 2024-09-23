import { StyleSheet } from "react-native";
import { Color, Font } from "../../Theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,
  },
  name: {
    ...Font.Label.XMedium,
    color: Color.Typo.Primary,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  okButton: {
    width: 70,
    height: 32,
    backgroundColor: Color.Click[300],
    justifyContent: "center",
    alignItems: "center",
  },
  okText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Primary,
  },
  refuseButton: {
    width: 70,
    height: 32,
    backgroundColor: Color.Field.Background,
    justifyContent: "center",
    alignItems: "center",
  },
  refuseText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Secondary,
  },
  requestButton: {
    width: 70,
    height: 32,
    backgroundColor: Color.Click[100],
    justifyContent: "center",
    alignItems: "center",
  },
});
