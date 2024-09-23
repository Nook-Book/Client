import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../styles/myPage/friendPage/FriendSearchResultPage";
import { SearchFriendResultRouteProp } from "../../types/navigation/navigation";

const FriendSearchResultPage = ({
  route,
}: {
  route: SearchFriendResultRouteProp;
}) => {
  const { query } = route.params; // query

  return (
    <View style={styles.container}>
      <Text>{query}</Text>
      <Text>{query}</Text>
      <Text>{query}</Text>
      <Text>{query}</Text>
    </View>
  );
};

export default FriendSearchResultPage;
