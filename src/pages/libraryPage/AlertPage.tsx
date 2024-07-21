import React from "react";
import { FlatList, View, Text } from "react-native";
import { styles } from "./AlertPageStyle";
import BackHeader from "../../components/header/BackHeader";
import { dummyList } from "../../assets/data/dummyAlertList";

export default function AlertPage() {
  const AlertItem = ({
    item,
    index,
  }: {
    item: { id: number; content: string };
    index: number;
  }) => {
    return (
      <View style={styles.alertItem} key={index}>
        <Text style={styles.alertText}>{item.content}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <BackHeader title="알림" />
      <FlatList
        data={dummyList}
        renderItem={({ item, index }) => (
          <AlertItem item={item} index={index} />
        )}
      ></FlatList>
    </View>
  );
}
