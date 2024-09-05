import React, { useState } from "react";
import {
  View,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
  Text,
} from "react-native";
import { styles } from "../../styles/challenge/ChallengeDetailPageStyle";
import BackSettingHeader from "../../components/header/BackSettingHeader";
import ProfileList from "../../components/challenge/ProfileList";
import StatusList from "../../components/challenge/StatusList";
import { dummyListCard } from "../../assets/data/dummyChallengeList";
import ChallengeCard from "../../components/challenge/ChallengeCard";

export default function ChallengeDetailPage({
  navigation,
}: {
  navigation: any;
}) {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAllProfiles, setShowAllProfiles] = useState(false);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const threshold = 278;
    setIsTitleVisible(scrollY > threshold);
  };

  return (
    <View style={styles.container}>
      <BackSettingHeader
        title={dummyListCard.title}
        isTitleVisible={isTitleVisible}
        navigation={navigation}
        onPress={() => {
          //챌린지 주인인지 확인 필요 -> 주인이면 페이지 이동, 아니면 모달 실행
          navigation.navigate("ChallengeDetailSetting");
        }}
      />
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        <View style={styles.contentContainer}>
          <Image source={dummyListCard.image} style={styles.image} />
        </View>
        <View style={styles.headWrap}>
          <Text style={styles.headText} numberOfLines={1}>
            {dummyListCard.title}
          </Text>
          <View style={styles.endWrap}>
            <Text style={styles.endText}>
              {dummyListCard.status === "END"
                ? "종료"
                : dummyListCard.status === "INPROGRESS"
                ? "진행중"
                : "진행 예정"}
            </Text>
          </View>
        </View>
        <ProfileList
          profiles={dummyListCard.profileList}
          showAllProfiles={showAllProfiles}
          onShowAllProfiles={() => setShowAllProfiles(true)}
        />
        <View style={styles.itemWrap}>
          <Text style={styles.leftText}>기간</Text>
          <Text style={styles.itemText}>{dummyListCard.date}</Text>
        </View>
        <View style={styles.itemWrap}>
          <Text style={styles.leftText}>목표 시간</Text>
          <Text style={styles.itemLightText}>
            총
            <Text style={styles.itemBoldText}> {dummyListCard.totalTime}</Text>{" "}
            / 하루
            <Text style={styles.itemBoldText}> {dummyListCard.dailyTime}</Text>
          </Text>
        </View>
        <StatusList
          cards={dummyListCard.cardList}
          setIsModalVisible={setIsModalVisible}
        />
      </ScrollView>
      {isModalVisible && (
        <ChallengeCard
          handleStatus={() => navigation.navigate("StatusCardDetail")}
          handleCancel={() => setIsModalVisible(false)}
        />
      )}
    </View>
  );
}
