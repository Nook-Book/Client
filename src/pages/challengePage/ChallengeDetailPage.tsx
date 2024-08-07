import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/challenge/ChallengeDetailPageStyle";
import AllChallengeHeader from "../../components/header/RightTextHeader";

export default function ChallengeDetailPage({
  navigation,
}: {
  navigation: any;
}) {
  return (
    <View style={styles.container}>
      <AllChallengeHeader navigation={navigation} />
      <Text>ChallengeDetailPage</Text>
    </View>
  );
}
