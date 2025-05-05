import { Image, StyleSheet, Text, View } from "react-native";
import { Color, Font } from "../../../styles/Theme";
import { MyCollectionBookDetail } from "../../../types/mypage/collection";
const MyCollectionDetailItem = ({ item }: { item: MyCollectionBookDetail }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          key={item.bookId}
          source={{ uri: item.cover }}
          style={styles.collectionImage}
        />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      {/* <Text>{item.author}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.125,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 5,
  },
  collectionImage: {
    width: 100,
    height: 164,
    borderRadius: 5,
  },
  title: {
    marginTop: 10,
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
  },
});

export default MyCollectionDetailItem;
