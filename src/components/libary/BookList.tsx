import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { FlatList, useWindowDimensions, Animated } from "react-native";
import { TBookCategory } from "../../types/book";
import CarouselItem from "./CarouselItem";

const BookList = ({
  navigation,
  editType,
  data,
  currentIndex,
  setCurrentIndex,
}: {
  navigation: any;
  editType: boolean;
  data: TBookCategory[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const itemWidth = 338;
  const { width: windowWidth } = useWindowDimensions();
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [snapToInterval, setSnapToInterval] = useState(0);

  //초기 스크롤 설정
  useEffect(() => {
    setTimeout(() => {
      flatListRef.current?.scrollToIndex({ index: 0, animated: false });
    }, 0);
  }, []);

  //현재 인덱스에 따른 스냅 간격 설정
  useEffect(() => {
    if (currentIndex === 0 || currentIndex === 2) {
      setSnapToInterval(itemWidth + (windowWidth - itemWidth) / 2 - 2.5);
    } else {
      setSnapToInterval(itemWidth + (windowWidth - itemWidth) / 2 - 7.5);
    }
  }, [currentIndex, windowWidth]);

  const viewabilityConfig = useMemo(
    () => ({
      itemVisiblePercentThreshold: 50,
    }),
    []
  );

  //현재 인덱스 설정
  const handleViewableItemsChanged = useCallback(
    ({
      viewableItems,
    }: {
      viewableItems: {
        item: TBookCategory;
        index: number | null;
        key: string;
        isViewable: boolean;
        section?: any;
      }[];
    }) => {
      if (viewableItems.length > 0) {
        const visibleIndex = viewableItems[0].index || 0;
        setCurrentIndex(visibleIndex);
      }
    },
    []
  );

  return (
    <Animated.FlatList
      ref={flatListRef}
      data={data}
      renderItem={({ item, index }) => (
        <CarouselItem
          item={item}
          index={index}
          scrollX={scrollX}
          navigation={navigation}
          editType={editType}
        />
      )}
      keyExtractor={(item, index) => `${item.id}_${index}`}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      decelerationRate="fast"
      snapToInterval={snapToInterval}
      scrollEventThrottle={16}
      contentContainerStyle={{
        paddingHorizontal: (windowWidth - itemWidth) / 2,
      }}
      onViewableItemsChanged={handleViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      onScrollToIndexFailed={(info) => {
        const wait = new Promise((resolve) => setTimeout(resolve, 0));
        wait.then(() => {
          flatListRef.current?.scrollToIndex({
            index: info.index,
            animated: true,
          });
        });
      }}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
    />
  );
};

export default BookList;
