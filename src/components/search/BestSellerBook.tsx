import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "../../styles/search/BestSellerBookStyle";
import { BestBook } from "../../types/search/bestbook";
import { useNavigation } from "@react-navigation/native";
import { DetailNavigationProp } from "../../types/detail";

const BestSellerBook = ({ id, title, image, name, isbn }: BestBook) => {
  const navigation = useNavigation<DetailNavigationProp>();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Detail", { isbn })}
    >
      <View style={styles.idContainer}>
        <Text style={styles.id}>{id}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>
      <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
        {name}
      </Text>
    </Pressable>
  );
};

export default BestSellerBook;
