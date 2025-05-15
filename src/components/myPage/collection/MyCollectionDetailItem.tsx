import { Image, StyleSheet, Text, View } from "react-native";
import { Color, Font } from "../../../styles/Theme";
import { MyCollectionBookDetail } from "../../../types/mypage/collection";
const MyCollectionDetailItem = ({
  item,
  width,
}: {
  item: MyCollectionBookDetail;
  width: number;
}) => {
  const shortedTitle =
    item.title.length > 10 ? item.title.slice(0, 10) + "..." : item.title;
  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.imageContainer}>
        <Image
          key={item.bookId}
          source={{ uri: item.cover }}
          style={styles.collectionImage}
        />
      </View>
      <Text style={styles.title}>{shortedTitle}</Text>
      <Text style={styles.author}>{item.author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
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
  author: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Secondary,
  },
});

export default MyCollectionDetailItem;
