import { View, Text, FlatList } from "react-native";
import { styles } from "../../pages/libraryPage/LibraryPageStyle";
import { TBookCategory } from "../../types/book";
import BookItem from "./BookItem";
import { dummyList } from "../../assets/data/dummyBookCarouseList";

const CarouselItem = ({
  item,
  index,
}: {
  item: TBookCategory;
  index: number;
}) => {
  const itemStyle = [
    styles.listWrap,
    index === 0 && { marginLeft: 0 },
    index === dummyList.length - 1 && { marginRight: 0 },
  ];

  return (
    <View style={itemStyle} key={`${item.id}_${index}`}>
      <View style={styles.inner}>
        <Text style={styles.subText}>{item.dummyBook.length}권</Text>
        <Text style={styles.mainText}>{item.title}</Text>
      </View>
      <FlatList
        data={item.dummyBook}
        renderItem={({ item }) => <BookItem item={item} />}
        keyExtractor={(book, index) => `${item.id}_${book.id}_${index}`}
        numColumns={3}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarouselItem;
