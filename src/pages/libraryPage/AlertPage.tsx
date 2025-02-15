import React from "react";
import { FlatList, View, Text } from "react-native";
import { styles } from "../../styles/library/AlertPageStyle";
import BackHeader from "../../components/header/BackHeader";
import { dummyList } from "../../assets/data/dummyAlertList";

export default function AlertPage() {
  const AlertItem = ({
    item,
    index,
  }: {
    item: { id: number; content: string; date: string };
    index: number;
  }) => {
    return (
      <View style={styles.alertItem} key={index}>
        <Text style={styles.alertText}>{item.content}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 50 }}></View>
      <BackHeader title="알림" />
      <FlatList
        data={dummyList}
        renderItem={({ item, index }) => (
          <AlertItem item={item} index={index} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
