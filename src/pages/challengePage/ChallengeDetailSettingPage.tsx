import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "../../styles/challenge/ChallengeDetailSettingPageStyle";
import BackTitleHeader from "../../components/header/BackTitleHeader";
import InterIcon from "../../assets/images/icon/Inter.svg";
import DeleteModal from "../../components/modal/DeleteModal";
import DeleteButton from "../../components/challenge/DeleteButton";
import { deleteChallenge } from "../../api/challenge/deleteChallenge";
import { deleteParticipant } from "../../api/challenge/deleteParticipant";

export default function ChallengeDetailSettingPage({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { detail } = route.params;
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isExitModal, setIsExitModal] = useState(false);

  //챌린지 삭제
  const handleDelete = async () => {
    const response = await deleteChallenge(detail.challengeId);
    if (response.check) {
      setIsDeleteModal(false);
      navigation.navigate("Challenge");
    }
  };

  //챌린지 나가기
  const handleExit = async () => {
    //participantId 값 필요
    const response = await deleteParticipant(detail.challengeId, 3);
    if (response.check) {
      setIsExitModal(false);
      navigation.navigate("Challenge");
    }
  };

  return (
    <View style={styles.container}>
      <BackTitleHeader
        navigation={navigation}
        isTitleVisible={false}
        title={""}
      />
      <View style={styles.betweenWrap}>
        {detail.isEditable ? (
          <>
            <View>
              <Pressable
                style={styles.pressWrap}
                onPress={() =>
                  navigation.navigate("NewChallenge", {
                    isNew: false,
                    detail: detail,
                  })
                }
              >
                <Text style={styles.pressText}>챌린지 수정</Text>
                <InterIcon />
              </Pressable>
              <Pressable
                style={styles.pressWrap}
                onPress={() =>
                  navigation.navigate("EditParticipant", {
                    challengeId: detail.challengeId,
                    challengeTitle: detail.title,
                  })
                }
              >
                <Text style={styles.pressText}>참여자 관리</Text>
                <InterIcon />
              </Pressable>
            </View>
            <DeleteButton
              text="챌린지 삭제"
              onPress={() => setIsDeleteModal(true)}
            />
          </>
        ) : (
          <>
            <View></View>
            <DeleteButton
              text="챌린지 나가기"
              onPress={() => setIsExitModal(true)}
            />
          </>
        )}
      </View>
      <DeleteModal
        visible={isDeleteModal}
        text={`‘${detail.title}’\n챌린지를 삭제하시겠습니까?`}
        onClose={() => setIsDeleteModal(false)}
        onComplate={handleDelete}
      />
      <DeleteModal
        visible={isExitModal}
        leftText="나가기"
        text={`‘${detail.title}’\n챌린지에서 나가시겠습니까?`}
        onClose={() => setIsExitModal(false)}
        onComplate={handleExit}
      />
    </View>
  );
}
