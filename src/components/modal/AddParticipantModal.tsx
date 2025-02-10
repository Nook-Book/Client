import React, { useState, useCallback } from "react";
import { FlatList, View, Text, TextInput, Modal } from "react-native";
import { styles } from "../../styles/challenge/AddParticipantModalStyle";
import BackHeader from "../header/BackHeader";
import { Color } from "../../styles/Theme";
import ParticipantItem from "../challenge/ParticipantItem";
import BottomOneButton from "../bottomSheet/BottomOneButton";
import { TInviteContentRes } from "../../types/challenge";
import { getInviteList } from "../../api/challenge/getInviteList";
import { useFocusEffect } from "@react-navigation/native";
import { getFriendList } from "../../api/challenge/getFriendList";

export default function AddParticipantModal({
  visible,
  onClose,
  onComplate,
  selectedParticipant,
  challengeId,
  isNew,
}: {
  visible: boolean;
  onClose: () => void;
  onComplate: (editParticipant: number[]) => void;
  selectedParticipant: number[];
  challengeId: number | null;
  isNew: boolean;
}) {
  const [inviteList, setInviteList] = useState<TInviteContentRes[]>();
  const [editParticipant, setEditParticipant] = useState(selectedParticipant);
  const [search, setSearch] = useState("");

  const fetchInviteList = async () => {
    try {
      if (!challengeId) return;

      const response = await getInviteList(challengeId);
      if (response?.content) {
        setInviteList(response.content);
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  const fetchFriendList = async () => {
    try {
      const response = await getFriendList(search);
      if (response?.check) {
        const newInviteList = response.information.content.map((friend) => ({
          userId: friend.userId,
          nickname: friend.nickname,
          imageUrl: friend.imageUrl,
          invitable: true,
        }));
        setInviteList(newInviteList);
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      isNew ? fetchFriendList() : fetchInviteList();
    }, [])
  );

  const handleSelect = useCallback(
    (useId: number) => {
      setEditParticipant((prev) =>
        prev.includes(useId)
          ? prev.filter((item) => item !== useId)
          : [...prev, useId]
      );
    },
    [setEditParticipant]
  );

  const renderItem = useCallback(
    ({ item }: { item: TInviteContentRes }) => {
      const isSelected = editParticipant.includes(item.userId);
      return (
        <ParticipantItem
          item={item}
          isSelected={isSelected}
          onSelect={() => item.invitable && handleSelect(item.userId)}
        />
      );
    },
    [editParticipant, handleSelect]
  );

  const handleSearchSubmit = () => {
    isNew ? fetchFriendList() : fetchInviteList();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <BackHeader
          title={isNew ? "친구 선택" : "참여자 추가"}
          onPress={onClose}
        />
        <TextInput
          style={styles.input}
          onChangeText={setSearch}
          value={search}
          placeholder="아이디 또는 닉네임을 검색하세요."
          placeholderTextColor={Color.Typo.Secondary}
          onSubmitEditing={handleSearchSubmit}
        />
        <Text style={styles.lengthText}>{editParticipant.length}명 선택</Text>
        <FlatList
          data={inviteList}
          renderItem={renderItem}
          keyExtractor={(item) => item.userId.toString()}
          showsVerticalScrollIndicator={false}
        />
        <BottomOneButton
          handleAccept={() => onComplate(editParticipant)}
          text="확인"
          disabled={editParticipant.length === 0}
        />
      </View>
    </Modal>
  );
}
