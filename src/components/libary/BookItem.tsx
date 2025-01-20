import { Image, Text, Pressable, useWindowDimensions } from "react-native";
import { TBook } from "../../types/book";
import { getStyles } from "../../styles/library/BookItemStyle";

const BookItem = ({
  item,
  editType,
  navigation,
}: {
  item: TBook;
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
      key={item.id}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.titleText} numberOfLines={2}>
        {item.title}
      </Text>
    </Pressable>
  );
};

export default BookItem;
