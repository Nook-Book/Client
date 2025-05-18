import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CheckBoxDefaultWhite from "../../../assets/images/icon/CheckBoxDefaultWhite.svg";
import CheckBoxWhite from "../../../assets/images/icon/CheckBoxWhite.svg";
import { Color, Font } from "../../../styles/Theme";
import { MyCollectionBookDetail } from "../../../types/mypage/collection";
const MyCollectionDetailItem = ({
  item,
  isEditMode,
  isSelected,
  onSelectBook,
}: {
  item: MyCollectionBookDetail;
  isEditMode: boolean;
  isSelected: boolean;
  onSelectBook: (book: MyCollectionBookDetail) => void;
}) => {
  const shortedTitle =
    item.title.length > 10 ? item.title.slice(0, 10) + "..." : item.title;
  return (
    <View style={styles.container}>
      {isSelected && <View style={styles.overlay} />}
      <View style={styles.imageContainer}>
        <Image
          key={item.bookId}
          source={{ uri: item.cover }}
          style={styles.collectionImage}
        />
      </View>
      <Text style={styles.title}>{shortedTitle}</Text>
      <Text style={styles.author}>{item.author}</Text>
      {isEditMode &&
        (isSelected ? (
          <TouchableOpacity
            style={styles.checkBox}
            onPress={() => onSelectBook(item)}
          >
            <CheckBoxWhite />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.checkBox}
            onPress={() => onSelectBook(item)}
          >
            <CheckBoxDefaultWhite />
          </TouchableOpacity>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 108,
    height: 200,
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
    width: 108,
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
  checkBox: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 103,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 164,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 5,
    zIndex: 100,
  },
});

export default MyCollectionDetailItem;
