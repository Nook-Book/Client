import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../../styles/challenge/StatusCardDetailPageStyle";
import BackTitleHeader from "../../components/header/BackTitleHeader";

export default function StatusCardDetailPage({
  navigation,
}: {
  navigation: any;
}) {
  return (
    <View style={styles.container}>
      <BackTitleHeader
        navigation={navigation}
        title="피쉬벅"
        isTitleVisible={true}
      />
      <ScrollView scrollEventThrottle={16}>
        <View>
          <Text>독서랑 달력</Text>
        </View>
      </ScrollView>
    </View>
  );
}
