import React, { useState } from "react";
import { View, FlatList, Pressable, Text } from "react-native";
import { styles } from "../../styles/challenge/EditParticipantPageStyle";
import DeleteModal from "../../components/modal/DeleteModal";
import DeleteButton from "../../components/challenge/DeleteButton";
import { dummyListParticipant } from "../../assets/data/dummyChallengeList";
import ParticipantDeleteItem from "../../components/challenge/ParticipantDeleteItem";
import BackTextHeader from "../../components/header/BackTextHeader";
import PlusIcon from "../../assets/images/icon/Plus.svg";

export default function EditParticipantPage({
  navigation,
}: {
  navigation: any;
}) {
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isParticipantDeleteModal, setIsParticipantDeleteModal] =
    useState(false);
  const [selectedParticipant, setSelectedParticipant] = useState({
    id: 0,
    name: "",
  });

  //챌린지 삭제
  const handleDelete = () => {
    setIsDeleteModal(false);
    navigation.navigate("Challenge");
  };

  //참여자 삭제
  const handleParticipantDelete = () => {
    setIsParticipantDeleteModal(false);
  };

  return (
    <View style={styles.container}>
      <BackTextHeader title="참여자 관리" />
      <View style={styles.betweenWrap}>
        <Text style={styles.headText}>참여자</Text>
        <Pressable style={styles.participantWrap}>
          <View style={styles.participantImage}>
            <PlusIcon style={styles.plusIcon} />
          </View>
          <Text style={styles.participantText}>참여자 추가하기</Text>
        </Pressable>
        <FlatList
          data={dummyListParticipant}
          renderItem={({ item }) => {
            return <ParticipantDeleteItem item={item} />;
          }}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
        <DeleteButton
          onPress={() => {
            setIsDeleteModal(true);
            setSelectedParticipant({
              id: 1,
              name: "두기",
            });
          }}
        />
      </View>
      <DeleteModal
        visible={isDeleteModal}
        text="챌린지를 삭제하시겠습니까?"
        onClose={() => setIsDeleteModal(false)}
        onComplate={handleDelete}
      />
      <DeleteModal
        visible={isParticipantDeleteModal}
        text={`${selectedParticipant.name}을 챌린지에서\n삭제하시겠습니까?`}
        onClose={() => setIsParticipantDeleteModal(false)}
        onComplate={handleParticipantDelete}
      />
    </View>
  );
}
