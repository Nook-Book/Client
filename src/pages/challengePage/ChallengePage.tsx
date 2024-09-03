import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "../../styles/challenge/ChallengePageStyle";
import AllChallengeHeader from "../../components/header/RightTextHeader";
import {
  dummyList,
  dummyListInvite,
  dummyListLong,
} from "../../assets/data/dummyChallengeList";
import PlusIcon from "../../assets/images/icon/Plus.svg";
import InterIcon from "../../assets/images/icon/Inter.svg";
import { Color } from "../../styles/Theme";
import { TChallenge } from "../../types/challenge";

export default function ChallengePage({ navigation }: { navigation: any }) {
  const ChallengeHead = ({ text, data }: { text: string; data: any }) => {
    return (
      <View style={styles.headWrap}>
        <Text style={styles.headText}>{text}</Text>
        <Text style={styles.headText}>
          {data.length}
          <Text style={{ color: Color.Typo.Secondary }}>개</Text>
        </Text>
      </View>
    );
  };

  const ChallengeItem = ({
    item,
    index,
    onPress,
  }: {
    item: TChallenge;
    index: number;
    onPress: () => void;
  }) => {
    return (
      <Pressable key={index} style={styles.challengeItem} onPress={onPress}>
        <Image source={item.image} style={styles.challengeImage} />
        <Text style={styles.challengeText} numberOfLines={1}>
          {item.title}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <AllChallengeHeader navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <ChallengeHead text="초대된 챌린지" data={dummyListInvite} />
          {dummyListInvite.map((data, index) => {
            return (
              <Pressable
                key={index}
                style={styles.inviteWrap}
                onPress={() => navigation.navigate("InviteChallengeDetail")}
              >
                <Text style={styles.inviteText} numberOfLines={1}>
                  {data.title}
                </Text>
                <InterIcon />
              </Pressable>
            );
          })}
          <ChallengeHead text="진행 중인 챌린지" data={dummyList} />
          <FlatList
            style={styles.challengeWrap}
            data={dummyList}
            renderItem={({ item, index }) => (
              <ChallengeItem
                item={item}
                index={index}
                onPress={() => navigation.navigate("ChallengeDetail")}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <ChallengeHead text="진행 예정인 챌린지" data={dummyListLong} />
          <FlatList
            style={styles.challengeWrap}
            data={dummyListLong}
            renderItem={({ item, index }) => (
              <ChallengeItem
                item={item}
                index={index}
                onPress={() => navigation.navigate("ChallengeDetail")}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <ChallengeHead text="종료된 챌린지" data={dummyListLong} />
          <FlatList
            style={styles.challengeWrap}
            data={dummyListLong}
            renderItem={({ item, index }) => (
              <ChallengeItem
                item={item}
                index={index}
                onPress={() => navigation.navigate("ChallengeDetail")}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      <View style={styles.plusWrap}>
        <TouchableOpacity
          onPress={() => navigation.navigate("NewChallenge")}
          style={styles.plusButton}
        >
          <PlusIcon width={28.8} height={28.8} color={Color.Contents.Icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
