import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../../styles/bottomSheet/BottomSheetStyle";
import LogoIcon from "../../assets/images/icon/Logo.svg";

const ShareCard = ({
  cover,
  title,
  author,
}: {
  cover: string;
  title: string;
  author: string;
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.logoWrap}>
        <LogoIcon />
      </View>
      <View style={styles.centeredView}>
        <View style={styles.imageWrap}>
          <Image source={{ uri: cover }} style={styles.bookImage} />
        </View>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.authorText}>{author}</Text>
      </View>
    </View>
  );
};

export default ShareCard;
