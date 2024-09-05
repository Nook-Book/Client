import React from "react";
import { View, Text, FlatList, Image, Pressable } from "react-native";
import { styles } from "../../styles/challenge/AllChallengePageStyle";
import BackHeader from "../../components/header/BackHeader";
import { dummyListLong } from "../../assets/data/dummyChallengeList";
import { Color } from "../../styles/Theme";

export default function AllChallengePage({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <BackHeader title="전체보기" />
      <View style={styles.contentContainer}>
        <Text style={styles.lengthText}>
          {dummyListLong.length}
          <Text style={{ color: Color.Typo.Secondary }}>개</Text>
        </Text>
        <FlatList
          data={dummyListLong}
          renderItem={({ item, index }) => (
            <Pressable
              key={index}
              style={styles.itemWrap}
              onPress={() =>
                navigation.navigate("ChallengeDetail", {
                  isInvite: false,
                })
              }
            >
              <Image style={styles.itemImage} source={item.image} />
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
