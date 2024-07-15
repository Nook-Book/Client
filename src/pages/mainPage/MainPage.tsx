import { StyleSheet, Text, View, Image } from "react-native";
import { Color, Font, Effect } from "../../styles/Theme";

export default function MainPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MainPage</Text>
      <Image source={require("../../assets/icon.png")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
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
