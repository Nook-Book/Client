import React from "react";
import { View } from "react-native";
import { styles } from "./DetailPageStyle";
import BackShareHeader from "../../components/header/BackShareHeader";

const DetailPage = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <BackShareHeader />
    </View>
  );
};

export default DetailPage;
