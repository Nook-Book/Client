import { StyleSheet } from "react-native";
import { Color, Font } from "../Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
  },
  contentContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 238,
    backgroundColor: Color.Click[200],
  },
  headWrap: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  headText: {
    ...Font.Label.Large,
    color: Color.Typo.Primary,
    flexShrink: 1,
  },
  endWrap: {
    padding: 4,
    backgroundColor: Color.Contents.Badge,
  },
  endText: {
    ...Font.Paragraph.SemiSmall,
    color: Color.Secondary,
  },
  itemWrap: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    height: 35,
  },
  profileItemWrap: {
    paddingHorizontal: 16,
    flexDirection: "row",
    gap: 30,
  },
  leftWrap: {
    justifyContent: "center",
    height: 35,
  },
  leftText: {
    ...Font.Label.SemiSmall,
    color: Color.Typo.Secondary,
    width: 50,
  },
  lengthWrap: {
    position: "absolute",
    right: 16,
    justifyContent: "center",
    height: 35,
  },
  lengthText: {
    ...Font.Label.SemiSmall,
    color: Color.Typo.Primary,
    padding: 4,
  },
  profileItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    height: 35,
  },
  profileImage: {
    width: 25.75,
    height: 25.75,
    borderRadius: 100,
    backgroundColor: "#C4C4C4",
  },
  profileItemText: {
    ...Font.Label.SemiSmall,
    color: Color.Typo.Primary,
  },
  itemText: {
    ...Font.Label.SemiMedium,
    color: Color.Typo.Primary,
  },
  itemLightText: {
    ...Font.Paragraph.SemiSmall,
    color: Color.Typo.Primary,
  },
  itemBoldText: {
    ...Font.Label.SemiSmall,
    color: Color.Typo.Primary,
  },
  statusCardWrap: {
    justifyContent: "center",
    alignItems: "center",
    width: 74,
    height: 100,
  },
  statusCardText: {
    ...Font.Label.Small,
    paddingVertical: 2,
  },
});

export const getStyles = (windowWidth: number) => {
  return StyleSheet.create({
    profileWrap: {
      flexDirection: "row",
      width: windowWidth - 160,
      columnGap: 15,
      flexWrap: "wrap",
    },
    statusWrap: {
      borderColor: Color.Border.Stroke,
      borderTopWidth: 0.8,
      paddingBottom: 100,
    },
    statusText: {
      ...Font.Label.Medium,
      color: Color.Typo.Primary,
      padding: 16,
    },
    statusItemWrap: {
      padding: 16,
      flexDirection: "row",
      flexWrap: "wrap",
      gap: (windowWidth - 328) / 3,
    },
  });
};
