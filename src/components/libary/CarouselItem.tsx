import {
  View,
  Text,
  FlatList,
  Animated,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { getStyles } from "../../styles/library/CarouselItemStyle";
import BookItem from "./BookItem";
import { dummyList } from "../../assets/data/dummyBookCarouseList";
import { TMainCollectionListDetailRes } from "../../types/library";

const CarouselItem = ({
  item,
  index,
  scrollX,
  navigation,
  editType,
}: {
  item: TMainCollectionListDetailRes;
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
      key={`${item.collectionId}_${index}`}
    >
      <Pressable
        onLongPress={() => !editType && navigation.navigate("EditBook")}
        key={item.collectionId}
        style={{ height: "100%" }}
      >
        <View style={styles.inner}>
          <Text style={styles.subText}>
            {item.collectionBooksListDetailRes.length}권
          </Text>
          <Text style={styles.mainText}>{item.collectionTitle}</Text>
        </View>
        <View style={styles.flatListWrap}>
          <FlatList
            data={item.collectionBooksListDetailRes}
            renderItem={({ item }) => (
              <BookItem
                item={item}
                navigation={navigation}
                editType={editType}
              />
            )}
            keyExtractor={(book, index) =>
              `${item.collectionId}_${book.bookId}_${index}`
            }
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
