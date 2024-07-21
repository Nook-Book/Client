import { View, Text, FlatList, Dimensions, Animated } from "react-native";
import { styles } from "../../pages/libraryPage/LibraryPageStyle";
import { TBookCategory } from "../../types/book";
import BookItem from "./BookItem";
import { dummyList } from "../../assets/data/dummyBookCarouseList";

const { width: windowWidth } = Dimensions.get("window");

const CarouselItem = ({
  item,
  index,
  scrollX,
}: {
  item: TBookCategory;
  index: number;
  scrollX: Animated.Value;
}) => {
  const position = Animated.divide(scrollX, windowWidth);

  const translateY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [
      40,
      index === 0 ? 0 : index === 1 ? -5 : index === 2 ? -10 : -18,
      index === 0 ? 40 : index === 1 ? 45 : index === 2 ? 50 : 58,
    ],
    extrapolate: "clamp",
  });

  const itemStyle = [
    styles.listWrap,
    index === 0 && { marginLeft: 0 },
    index === dummyList.length - 1 && { marginRight: 0 },
  ];

  return (
    <Animated.View
      style={[itemStyle, { transform: [{ translateY }] }]}
      key={`${item.id}_${index}`}
    >
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
    </Animated.View>
  );
};

export default CarouselItem;
