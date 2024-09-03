import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import { styles } from "../../styles/challenge/CustomWheelPickerStyle";

interface Props {
  items: string[];
  onItemChange: (item: string) => void;
  itemHeight: number;
  initValue?: string;
}

const WheelPicker: React.FC<Props> = (props) => {
  const { items, onItemChange, itemHeight, initValue } = props;
  const flatListRef = useRef<Animated.FlatList<string>>(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  const initValueIndex = initValue ? items.indexOf(initValue) : 0;
  const [selectedIndex, setSelectedIndex] = useState(items[initValueIndex]);

  const renderItem = ({ item, index }: ListRenderItemInfo<string>) => {
    const inputRange = [
      (index - 2) * itemHeight,
      (index - 1) * itemHeight,
      index * itemHeight,
    ];
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1],
    });

    return (
      <Animated.View
        style={[
          styles.readTimeWrap,
          {
            height: itemHeight,
            transform: [{ scale }],
          },
        ]}
      >
        <Text style={styles.itemText}>{item}</Text>
      </Animated.View>
    );
  };

  useEffect(() => {
    onItemChange(selectedIndex);
  }, [selectedIndex]);

  useEffect(() => {
    if (flatListRef.current && initValueIndex >= 0) {
      flatListRef.current.scrollToIndex({
        index: initValueIndex,
        animated: false,
      });
    }
  }, []);

  const momentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / itemHeight);
    setSelectedIndex(items[index]);
  };

  const modifiedItems = ["", ...items, ""];

  return (
    <View style={{ height: itemHeight * 3 }}>
      <Animated.FlatList
        ref={flatListRef}
        data={modifiedItems}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        snapToInterval={itemHeight}
        onMomentumScrollEnd={momentumScrollEnd}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        getItemLayout={(_, index) => ({
          length: itemHeight,
          offset: itemHeight * index,
          index,
        })}
        initialScrollIndex={initValueIndex}
      />
    </View>
  );
};

export default WheelPicker;
