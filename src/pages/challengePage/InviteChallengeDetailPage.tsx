import React, { useState } from "react";
import {
  View,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
  Image,
} from "react-native";
import { styles } from "../../styles/challenge/ChallengeDetailPageStyle";
import BackTitleHeader from "../../components/header/BackTitleHeader";
import { dummyListCard } from "../../assets/data/dummyChallengeList";
import ProfileList from "../../components/challenge/ProfileList";
import StatusList from "../../components/challenge/StatusList";
import BottomTwoButton from "../../components/bottomSheet/BottomTwoButton";

export default function InviteChallengeDetailPage({
  navigation,
}: {
  navigation: any;
}) {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [showAllProfiles, setShowAllProfiles] = useState(false);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const threshold = 278;
    setIsTitleVisible(scrollY > threshold);
  };

  return (
    <View style={styles.container}>
      <BackTitleHeader
        navigation={navigation}
        title={dummyListCard.title}
        isTitleVisible={isTitleVisible}
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
        <StatusList cards={dummyListCard.cardList} />
      </ScrollView>
      <BottomTwoButton
        handleAccept={() => console.log("수락")}
        handleReject={() => console.log("거절")}
      />
    </View>
  );
}
