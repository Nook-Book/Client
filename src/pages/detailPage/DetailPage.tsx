import React from "react";
import { ScrollView, View, Text } from "react-native";
import { styles } from "../../styles/detail/DetailPageStyle";
import BackShareHeader from "../../components/header/BackShareHeader";

const DetailPage = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <BackShareHeader />
      <ScrollView>
        <View style={styles.scrollWrap}>
          <Text>상세 페이지</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailPage;
