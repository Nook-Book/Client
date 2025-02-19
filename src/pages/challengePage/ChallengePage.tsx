import React, { useCallback, useState } from "react";
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
import PlusIcon from "../../assets/images/icon/Plus.svg";
import InterIcon from "../../assets/images/icon/Inter.svg";
import { Color } from "../../styles/Theme";
import {
  TChallengeListInfoRes,
  TChallengeListInformationRes,
} from "../../types/challenge";
import { getChallengeList } from "../../api/challenge/getChallengeList";
import { useFocusEffect } from "@react-navigation/native";

export default function ChallengePage({ navigation }: { navigation: any }) {
  const [list, setList] = useState<TChallengeListInformationRes>();

  const fetchChallengeList = async () => {
    try {
      const response = await getChallengeList();
      if (response?.check) {
        setList(response.information);
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchChallengeList();
    }, [])
  );

  const ChallengeHead = ({
    text,
    count,
  }: {
    text: string;
    count: number | undefined;
  }) => {
    return (
      <View style={styles.headWrap}>
        <Text style={styles.headText}>{text}</Text>
        <Text style={styles.headText}>
          {count}
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
    item: TChallengeListInfoRes;
    index: number;
    onPress: () => void;
  }) => {
    return (
      <Pressable key={index} style={styles.challengeItem} onPress={onPress}>
        <Image
          source={{
            uri: item.challengeCover,
          }}
          style={styles.challengeImage}
        />
        <Text style={styles.challengeText} numberOfLines={1}>
          {item.title}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <AllChallengeHeader
        onPress={() => navigation.navigate("AllChallenge", { list: list })}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <ChallengeHead
            text="초대된 챌린지"
            count={list?.waitingInvitationCount}
          />
          {list?.waitingInvitationList.map((data, index) => {
            return (
              <Pressable
                key={index}
                style={styles.inviteWrap}
                onPress={() =>
                  navigation.navigate("ChallengeDetail", {
                    isInvite: true,
                    challengeId: data.challengeId,
                  })
                }
              >
                <Text style={styles.inviteText} numberOfLines={1}>
                  {data.title}
                </Text>
                <InterIcon />
              </Pressable>
            );
          })}
          <ChallengeHead text="진행 중인 챌린지" count={list?.progressCount} />
          <FlatList
            style={styles.challengeWrap}
            data={list?.progressList}
            renderItem={({ item, index }) => (
              <ChallengeItem
                item={item}
                index={index}
                onPress={() =>
                  navigation.navigate("ChallengeDetail", {
                    isInvite: false,
                    challengeId: item.challengeId,
                  })
                }
              />
            )}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <ChallengeHead text="진행 예정인 챌린지" count={list?.waitingCount} />
          <FlatList
            style={styles.challengeWrap}
            data={list?.waitingList}
            renderItem={({ item, index }) => (
              <ChallengeItem
                item={item}
                index={index}
                onPress={() =>
                  navigation.navigate("ChallengeDetail", {
                    isInvite: false,
                    challengeId: item.challengeId,
                  })
                }
              />
            )}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <ChallengeHead text="종료된 챌린지" count={list?.endCount} />
          <FlatList
            style={styles.challengeWrap}
            data={list?.endList}
            renderItem={({ item, index }) => (
              <ChallengeItem
                item={item}
                index={index}
                onPress={() =>
                  navigation.navigate("ChallengeDetail", {
                    isInvite: false,
                    challengeId: item.challengeId,
                  })
                }
              />
            )}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      <View style={styles.plusWrap}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("NewChallenge", {
              isNew: true,
            })
          }
          style={styles.plusButton}
        >
          <PlusIcon width={28.8} height={28.8} color={Color.Contents.Icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
