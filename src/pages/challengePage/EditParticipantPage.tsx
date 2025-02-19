import React, { useCallback, useState } from "react";
import { View, Pressable, Text, FlatList } from "react-native";
import { styles } from "../../styles/challenge/EditParticipantPageStyle";
import DeleteModal from "../../components/modal/DeleteModal";
import DeleteButton from "../../components/challenge/DeleteButton";
import ParticipantDeleteItem from "../../components/challenge/ParticipantDeleteItem";
import BackTextHeader from "../../components/header/BackTextHeader";
import PlusIcon from "../../assets/images/icon/Plus.svg";
import AddParticipantModal from "../../components/modal/AddParticipantModal";
import { postParticipant } from "../../api/challenge/postParticipant";
import { getParticipant } from "../../api/challenge/getParticipant";
import { useFocusEffect } from "@react-navigation/native";
import { TParticipantListRes } from "../../types/challenge";
import { patchOwner } from "../../api/challenge/patchOwner";
import { deleteParticipant } from "../../api/challenge/deleteParticipant";

export default function EditParticipantPage({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { challengeId, challengeTitle } = route?.params;

  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isParticipantDeleteModal, setIsParticipantDeleteModal] =
    useState(false);
  const [isParticipantOwnerModal, setIsParticipantOwnerModal] = useState(false);
  const [selectedParticipant, setSelectedParticipant] = useState({
    id: 0,
    name: "",
  });
  const [isParticipantModal, setIsParticipantModal] = useState(false); //친구 선택 모달
  const [list, setList] = useState<TParticipantListRes[]>();
  const [openId, setOpenId] = useState<number | null>(null);

  const fetchParticipantList = async () => {
    try {
      const response = await getParticipant(challengeId);
      if (response?.check) {
        setList(response.information.participantList);
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchParticipantList();
    }, [])
  );

  //챌린지 삭제
  const handleDelete = () => {
    setIsDeleteModal(false);
    navigation.navigate("Challenge");
  };

  //참여자 삭제
  const handleParticipantDelete = async () => {
    const response = await deleteParticipant(
      challengeId,
      selectedParticipant.id
    );
    if (response.check) {
      setIsParticipantDeleteModal(false);
      setOpenId(null);
      fetchParticipantList();
    }
  };

  //참여자 추가
  const handleParticipant = async (editParticipant: number[]) => {
    if (!challengeId) return;
    for (const participantId of editParticipant) {
      await postParticipant(challengeId, participantId);
    }
  };

  //방장 변경
  const handleParticipantOwner = async () => {
    const response = await patchOwner(challengeId, selectedParticipant.id);

    if (response.check) {
      setIsParticipantOwnerModal(false);
      setOpenId(null);
      navigation.navigate("ChallengeDetail", {
        ...route.params,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 50 }}></View>
      <BackTextHeader title="참여자 관리" />
      <View style={styles.betweenWrap}>
        <Text style={styles.headText}>참여자</Text>
        <Pressable
          style={styles.participantWrap}
          onPress={() => setIsParticipantModal(true)}
        >
          <View style={styles.participantImage}>
            <PlusIcon style={styles.plusIcon} />
          </View>
          <Text style={styles.participantText}>참여자 추가하기</Text>
        </Pressable>
        <FlatList
          data={list}
          keyExtractor={(item) => item.participantId.toString()}
          renderItem={({ item }) => {
            return (
              <ParticipantDeleteItem
                item={item}
                onOwner={() => {
                  setSelectedParticipant({
                    id: item.participantId,
                    name: item.participantNickname,
                  });
                  setIsParticipantOwnerModal(true);
                }}
                onDelete={() => {
                  setSelectedParticipant({
                    id: item.participantId,
                    name: item.participantNickname,
                  });
                  setIsParticipantDeleteModal(true);
                }}
                openId={openId}
                setOpenId={setOpenId}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
        />
        <DeleteButton
          onPress={() => {
            setIsDeleteModal(true);
          }}
          text="챌린지 삭제"
        />
      </View>
      <DeleteModal
        visible={isDeleteModal}
        text={`‘${challengeTitle}’챌린지를\n삭제하시겠습니까?`}
        onClose={() => setIsDeleteModal(false)}
        onComplate={handleDelete}
      />
      <DeleteModal
        visible={isParticipantDeleteModal}
        text={`‘${selectedParticipant.name}’님을 챌린지에서\n삭제하시겠습니까?`}
        onClose={() => setIsParticipantDeleteModal(false)}
        onComplate={handleParticipantDelete}
      />
      <DeleteModal
        visible={isParticipantOwnerModal}
        text={`‘${
          selectedParticipant.name
        }’님으로 방장을\n변경하시겠습니까?\n\n방장 변경 시,\n‘${
          list
            ?.filter((participant) => participant.role === "방장")
            .map((participant) => participant.participantNickname)[0]
        }’님의 방장 권한이 사라집니다.`}
        onClose={() => setIsParticipantOwnerModal(false)}
        onComplate={handleParticipantOwner}
        leftText="확인"
      />
      <AddParticipantModal
        visible={isParticipantModal}
        onClose={() => setIsParticipantModal(false)}
        onComplate={(editParticipant) => {
          handleParticipant(editParticipant);
          setIsParticipantModal(false);
        }}
        selectedParticipant={[]}
        challengeId={challengeId}
        isNew={false}
      />
    </View>
  );
}
