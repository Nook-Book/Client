import React from "react";
import { Text, View, Image } from "react-native";
import { BestBook } from "../../types/search/bestbook";
import { styles } from "../../styles/search/BestSellerBookStyle";

const BestSellerBook = ({ id, title, image, name }: BestBook) => {
  return (
    <View style={styles.container}>
      <View style={styles.idContainer}>
        <Text style={styles.id}>{id}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>
      <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
        {name}
      </Text>
    </View>
  );
};

export default BestSellerBook;
