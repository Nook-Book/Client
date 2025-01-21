import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { getStyles } from "../../styles/challenge/AllChallengePageStyle";
import BackHeader from "../../components/header/BackHeader";
import { Color } from "../../styles/Theme";

export default function AllChallengePage({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { width: windowWidth } = useWindowDimensions();
  const styles = getStyles(windowWidth);

  const list = route.params.list;

  return (
    <View style={styles.container}>
      <View style={{ height: 50 }}></View>
      <BackHeader title="전체보기" />
      <View style={styles.contentContainer}>
        <Text style={styles.lengthText}>
          {list.waitingCount + list.progressCount + list.endCount}
          <Text style={{ color: Color.Typo.Secondary }}>개</Text>
        </Text>
        <FlatList
          data={[...list.waitingList, ...list.progressList, ...list.endList]}
          renderItem={({ item, index }) => (
            <Pressable
              key={index}
              style={styles.itemWrap}
              onPress={() =>
                navigation.navigate("ChallengeDetail", {
                  isInvite: false,
                  challengeId: item.challengeId,
                })
              }
            >
              <Image
                source={{
                  uri:
                    "https://nookbook-image-bucket.s3.amazonaws.com/" +
                    item.challengeCover,
                }}
                style={styles.itemImage}
              />
              <Text style={styles.itemText} numberOfLines={2}>
                {item.title}
              </Text>
            </Pressable>
          )}
          numColumns={3}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
