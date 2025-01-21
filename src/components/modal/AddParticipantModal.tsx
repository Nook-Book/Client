import React, { useState, useCallback } from "react";
import { FlatList, View, Text, TextInput, Modal } from "react-native";
import { styles } from "../../styles/challenge/AddParticipantModalStyle";
import BackHeader from "../header/BackHeader";
import { dummyListParticipant } from "../../assets/data/dummyChallengeList";
import { Color } from "../../styles/Theme";
import ParticipantItem from "../challenge/ParticipantItem";
import BottomOneButton from "../bottomSheet/BottomOneButton";

export default function AddParticipantModal({
  visible,
  onClose,
  onComplate,
  selectedParticipant,
  isNew,
}: {
  visible: boolean;
  onClose: () => void;
  onComplate: (editParticipant: number[]) => void;
  selectedParticipant: number[];
  isNew: boolean;
}) {
  const [editParticipant, setEditParticipant] = useState(selectedParticipant);
  const [search, setSearch] = useState("");

  const handleSelect = useCallback(
    (id: number) => {
      setEditParticipant((prevSelectedParticipant) =>
        prevSelectedParticipant.includes(id)
          ? prevSelectedParticipant.filter((item) => item !== id)
          : [...prevSelectedParticipant, id]
      );
    },
    [setEditParticipant]
  );

  const renderItem = useCallback(
    ({ item }: { item: any }) => {
      const isSelected = selectedParticipant.includes(item.id);
      return (
        <ParticipantItem
          item={item}
          isSelected={isSelected}
          onSelect={() => handleSelect(item.id)}
        />
      );
    },
    [selectedParticipant, handleSelect]
  );

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
        />
        <Text style={styles.lengthText}>
          {selectedParticipant.length}명 선택
        </Text>
        <FlatList
          data={dummyListParticipant}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
        <BottomOneButton
          handleAccept={() => onComplate(editParticipant)}
          text="확인"
          disabled={selectedParticipant.length === 0}
        />
      </View>
    </Modal>
  );
}
