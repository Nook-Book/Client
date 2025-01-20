import {
  View,
  Text,
  FlatList,
  Animated,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { getStyles } from "../../styles/library/CarouselItemStyle";
import { TBookCategory } from "../../types/book";
import BookItem from "./BookItem";
import { dummyList } from "../../assets/data/dummyBookCarouseList";

const CarouselItem = ({
  item,
  index,
  scrollX,
  navigation,
  editType,
}: {
  item: TBookCategory;
  index: number;
  scrollX: Animated.Value;
  navigation: any;
  editType: boolean;
}) => {
  const { width: windowWidth } = useWindowDimensions();
  const styles = getStyles(windowWidth);

  const position = Animated.divide(scrollX, windowWidth);

  const translateY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: editType
      ? [0, 0, 0]
      : [
          40,
          index === 0 ? 0 : index === 1 ? -5 : index === 2 ? -10 : -18,
          index === 0 ? 40 : index === 1 ? 45 : index === 2 ? 50 : 58,
        ],
    extrapolate: "clamp",
  });

  const itemStyle = [
    styles.listWrap,
    !editType && { paddingBottom: 55 },
    index === 0 && { marginLeft: 0 },
    index === dummyList.length - 1 && { marginRight: 0 },
  ];

  return (
    <Animated.View
      style={[itemStyle, { transform: [{ translateY }] }]}
      key={`${item.id}_${index}`}
    >
      <Pressable
        onLongPress={() => !editType && navigation.navigate("EditBook")}
        key={item.id}
        style={{ height: "100%" }}
      >
        <View style={styles.inner}>
          <Text style={styles.subText}>{item.dummyBook.length}권</Text>
          <Text style={styles.mainText}>{item.title}</Text>
        </View>
        <View style={styles.flatListWrap}>
          <FlatList
            data={item.dummyBook}
            renderItem={({ item }) => (
              <BookItem item={item} navigation={navigation} editType={editType} />
            )}
            keyExtractor={(book, index) => `${item.id}_${book.id}_${index}`}
            numColumns={3}
            style={styles.flatList}
            contentContainerStyle={styles.flatListContent}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default CarouselItem;
