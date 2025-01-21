import React, { useCallback, useState } from "react";
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
import ChallengeCard from "../../components/challenge/ChallengeCard";
import { getDayOfWeek } from "../../utils/calendarUtils";
import BottomTwoButton from "../../components/bottomSheet/BottomTwoButton";
import BackTitleHeader from "../../components/header/BackTitleHeader";
import { useFocusEffect } from "@react-navigation/native";
import { TChallengeDetailInformationRes } from "../../types/challenge";
import { getChallengeDetail } from "../../api/challenge/getChallengeDetail";
import { dummyListCard } from "../../assets/data/dummyChallengeList";

export default function ChallengeDetailPage({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { isInvite, challengeId } = route.params;

  const [detail, setDetail] = useState<TChallengeDetailInformationRes>();

  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAllProfiles, setShowAllProfiles] = useState(false);

  const fetchChallengeDetail = async () => {
    try {
      const response = await getChallengeDetail(challengeId);
      if (response?.check) {
        setDetail(response.information);
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchChallengeDetail();
    }, [])
  );

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const threshold = 278;
    setIsTitleVisible(scrollY > threshold);
  };

  //시간 변환
  const formatTime = (time: string) => {
    const [hour, minute] = time.split(":");
    return `${hour}시 ${minute === "00" ? "" : `${minute}분`}`;
  };

  return (
    <View style={styles.container}>
      {detail && (
        <>
          <View style={{ height: 50 }}></View>
          {isInvite ? (
            <BackTitleHeader
              navigation={navigation}
              title={detail.title}
              isTitleVisible={isTitleVisible}
            />
          ) : (
            <BackSettingHeader
              title={detail.title}
              isTitleVisible={isTitleVisible}
              navigation={navigation}
              onPress={() =>
                navigation.navigate("ChallengeDetailSetting", {
                  detail: detail,
                })
              }
            />
          )}
          <ScrollView
            onScroll={handleScroll}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.contentContainer}>
              <Image
                source={{
                  uri: detail.challengeCover,
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.headWrap}>
              <Text style={styles.headText} numberOfLines={1}>
                {detail.title}
              </Text>
              <View style={styles.endWrap}>
                <Text style={styles.endText}>
                  {detail.challengeStatus === "END"
                    ? "종료"
                    : detail.challengeStatus === "PROGRESS"
                    ? "진행중"
                    : "진행 예정"}
                </Text>
              </View>
            </View>
            <ProfileList
              profiles={detail.participants}
              showAllProfiles={showAllProfiles}
              onShowAllProfiles={() => setShowAllProfiles(true)}
            />
            <View style={styles.itemWrap}>
              <Text style={styles.leftText}>기간</Text>
              <Text style={styles.itemText}>
                {detail.startDate.replaceAll("-", ".")} (
                {getDayOfWeek(detail.startDate)}) ~{" "}
                {detail.endDate.replaceAll("-", ".")} (
                {getDayOfWeek(detail.endDate)})
              </Text>
            </View>
            <View style={styles.itemWrap}>
              <Text style={styles.leftText}>목표 시간</Text>
              <Text style={styles.itemLightText}>
                총
                <Text style={styles.itemBoldText}> {detail.totalHour}시간</Text>{" "}
                / 하루
                <Text style={styles.itemBoldText}> {detail.dailyGoal}분</Text>
              </Text>
            </View>
            {detail.dailyStartTime && detail.dailyEndTime && (
              <View style={styles.itemWrap}>
                <Text style={styles.leftText}>독서 시간</Text>
                <Text style={styles.itemLightText}>
                  시작
                  <Text style={styles.itemBoldText}>
                    {" "}
                    {formatTime(detail.dailyStartTime)}
                  </Text>{" "}
                  / 종료
                  <Text style={styles.itemBoldText}>
                    {" "}
                    {formatTime(detail.dailyEndTime)}
                  </Text>
                </Text>
              </View>
            )}
            {/* 현황 API 연동 필요 */}
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
          {isInvite && (
            <BottomTwoButton
              handleAccept={() => console.log("수락")}
              handleReject={() => console.log("거절")}
            />
          )}
        </>
      )}
    </View>
  );
}
