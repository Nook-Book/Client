import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Polygon from "../../assets/images/icon/Polygon.svg";
import { styles } from "../../styles/myPage/BookStatisticsHeader";
import useYear from "../../store/useYear";

const BookstatisticsHeader = () => {
  const { year, increaseYear, decreaseYear } = useYear();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decreaseYear}>
        <Polygon />
      </TouchableOpacity>
      <Text>{year}</Text>
      <TouchableOpacity onPress={increaseYear}>
        <Polygon style={{ transform: [{ rotate: "180deg" }] }} />
      </TouchableOpacity>
    </View>
  );
};

export default BookstatisticsHeader;
