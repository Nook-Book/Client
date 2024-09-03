import React, { useState, useCallback } from "react";
import { FlatList, View, Text, Pressable, TextInput } from "react-native";
import { styles } from "../../styles/challenge/AddParticipantPageStyle";
import BackHeader from "../../components/header/BackHeader";
import { dummyListParticipant } from "../../assets/data/dummyChallengeList";
import { Color } from "../../styles/Theme";
import ParticipantItem from "../../components/challenge/ParticipantItem";
import BottomOneButton from "../../components/bottomSheet/BottomOneButton";

export default function AddParticipantPage({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { currentSelectedParticipant } = route.params;
  const [selectedParticipant, setSelectedParticipant] = useState<number[]>(
    currentSelectedParticipant || []
  );
  const [search, setSearch] = useState("");

  const handleConfirm = () => {
    navigation.navigate("NewChallenge", {
      updatedSelectedParticipant: selectedParticipant,
    });
  };

  const handleSelect = useCallback(
    (id: number) => {
      setSelectedParticipant((prevSelectedParticipant) =>
        prevSelectedParticipant.includes(id)
          ? prevSelectedParticipant.filter((item) => item !== id)
          : [...prevSelectedParticipant, id]
      );
    },
    [setSelectedParticipant]
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
    <View style={styles.container}>
      <BackHeader title="친구 선택" />
      <TextInput
        style={styles.input}
        onChangeText={setSearch}
        value={search}
        placeholder="아이디 또는 닉네임을 검색하세요."
        placeholderTextColor={Color.Typo.Secondary}
      />
      <Text style={styles.lengthText}>{selectedParticipant.length}명 선택</Text>
      <FlatList
        data={dummyListParticipant}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <BottomOneButton
        handleAccept={handleConfirm}
        text="확인"
        disabled={selectedParticipant.length === 0}
      />
    </View>
  );
}
