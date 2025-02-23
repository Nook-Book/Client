import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  FlatList,
  useWindowDimensions,
  Animated,
  Platform,
} from "react-native";
import CarouselItem from "./CarouselItem";
import { TMainCollectionListDetailRes } from "../../types/library";

const BookList = ({
  navigation,
  editType,
  data,
  setCurrentIndex,
}: {
  navigation: any;
  editType: boolean;
  data: TMainCollectionListDetailRes[];
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { width: windowWidth } = useWindowDimensions();
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [snapToInterval, setSnapToInterval] = useState(windowWidth - 26 - 2.5);

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
        item: TMainCollectionListDetailRes;
        index: number | null;
        key: string;
        isViewable: boolean;
        section?: any;
      }[];
    }) => {
      if (viewableItems.length > 0) {
        const visibleIndex = viewableItems[0].index || 0;
        setCurrentIndex(visibleIndex);

        if (data.length === 4) {
          if (
            (Platform.OS === "android" &&
              (visibleIndex === 2 || visibleIndex === 4)) ||
            (Platform.OS === "ios" &&
              (visibleIndex === 1 || visibleIndex === 3))
          ) {
            setSnapToInterval(windowWidth - 26 - 7.5);
          } else {
            setSnapToInterval(windowWidth - 26 - 2.5);
          }
        }
      }
    },
    [windowWidth]
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
          length={data.length}
        />
      )}
      keyExtractor={(item, index) => `${item.collectionId}_${index}`}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      decelerationRate="fast"
      snapToInterval={snapToInterval}
      scrollEventThrottle={16}
      contentContainerStyle={{
        paddingHorizontal: 26,
        gap: 10,
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
