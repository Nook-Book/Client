import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../../styles/bottomSheet/BottomSheetStyle";
import LogoIcon from "../../assets/images/icon/Logo.svg";

const ShareCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.logoWrap}>
        <LogoIcon />
      </View>
      <View style={styles.centeredView}>
        <View style={styles.imageWrap}>
          <Image
            source={require("../../assets/images/dummy/book/2.png")}
            style={styles.bookImage}
          />
        </View>
        <Text style={styles.titleText}>몰입 : 인생을 바꾸는 자기 혁명</Text>
        <Text style={styles.authorText}>황농문</Text>
      </View>
    </View>
  );
};

export default ShareCard;
