import { Image, Text, Pressable } from "react-native";
import { TBook } from "../../types/book";
import { styles } from "./BookItemStyle";

const BookItem = ({ item, navigation }: { item: TBook; navigation: any }) => {
  return (
    <Pressable
      onPress={() => console.log(item)} //상세페이지 이동
      onLongPress={() => navigation.navigate("EditBook")}
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
