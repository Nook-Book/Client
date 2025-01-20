import { Image, Text, Pressable, useWindowDimensions } from "react-native";
import { getStyles } from "../../styles/library/BookItemStyle";
import { TCollectionBooksListDetailRes } from "../../types/library";

const BookItem = ({
  item,
  editType,
  navigation,
}: {
  item: TCollectionBooksListDetailRes;
  editType: boolean;
  navigation: any;
}) => {
  const { width: windowWidth } = useWindowDimensions();

  const styles = getStyles(windowWidth);

  return (
    <Pressable
      onPress={() => !editType && navigation.navigate("Detail")}
      onLongPress={() => !editType && navigation.navigate("EditBook")}
      style={styles.bookItem}
      key={item.bookId}
    >
      <Image source={{ uri: item.cover }} style={styles.image} />
      <Text style={styles.titleText} numberOfLines={2}>
        {item.title}
      </Text>
    </Pressable>
  );
};

export default BookItem;
