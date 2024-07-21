import { View, Image, Text } from "react-native";
import { TBook } from "../../types/book";
import { styles } from "../../pages/libraryPage/LibraryPageStyle";

const BookItem = ({ item }: { item: TBook }) => (
  <View style={styles.bookItem} key={item.id}>
    <Image source={item.image} style={styles.image} />
    <Text style={styles.titleText} numberOfLines={2}>
      {item.title}
    </Text>
  </View>
);

export default BookItem;
