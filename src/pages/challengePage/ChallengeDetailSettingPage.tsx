import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "../../styles/challenge/ChallengeDetailSettingPageStyle";
import BackTitleHeader from "../../components/header/BackTitleHeader";
import InterIcon from "../../assets/images/icon/Inter.svg";
import DeleteModal from "../../components/modal/DeleteModal";
import DeleteButton from "../../components/challenge/DeleteButton";

export default function ChallengeDetailSettingPage({
  navigation,
}: {
  navigation: any;
}) {
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  //챌린지 삭제
  const handleDelete = () => {
    setIsDeleteModal(false);
    navigation.navigate("Challenge");
  };

  return (
    <View style={styles.container}>
      <BackTitleHeader
        navigation={navigation}
        isTitleVisible={false}
        title={""}
      />
      <View style={styles.betweenWrap}>
        <View>
          <Pressable
            style={styles.pressWrap}
            onPress={() => navigation.navigate("EditChallenge")}
          >
            <Text style={styles.pressText}>챌린지 수정</Text>
            <InterIcon />
          </Pressable>
          <Pressable
            style={styles.pressWrap}
            onPress={() => navigation.navigate("EditParticipant")}
          >
            <Text style={styles.pressText}>참여자 관리</Text>
            <InterIcon />
          </Pressable>
        </View>
        <DeleteButton onPress={() => setIsDeleteModal(true)} />
      </View>
      <DeleteModal
        visible={isDeleteModal}
        text="챌린지를 삭제하시겠습니까?"
        onClose={() => setIsDeleteModal(false)}
        onComplate={handleDelete}
      />
    </View>
  );
}
