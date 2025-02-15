import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import ChallangeCardOffIcon from "../../assets/images/challange/ChallangeCardOff.svg";
import ChallangeCardOnIcon from "../../assets/images/challange/ChallangeCardOn.svg";
import { styles } from "../../styles/challenge/ChallengeDetailPageStyle";
import { Color } from "../../styles/Theme";
import { TChallengeDetailParticipantsRes } from "../../types/challenge";

type CardItemProps = {
  item: TChallengeDetailParticipantsRes;
  onPress: () => void;
};

const CardItem = ({ item, onPress }: CardItemProps) => (
  <Pressable style={styles.statusCardWrap} onPress={onPress}>
    {item.participantStatus === "RESTING" ? (
      <ChallangeCardOffIcon />
    ) : (
      <ChallangeCardOnIcon />
    )}
    <Text
      style={[
        styles.statusCardText,
        {
          color:
            item.participantStatus === "RESTING"
              ? Color.Typo.Secondary
              : Color.Contents.Click,
        },
      ]}
    >
      {item.nickname}
    </Text>
    <Text
      style={[
        styles.statusCardText,
        {
          color:
            item.participantStatus === "RESTING"
              ? Color.Typo.Secondary
              : Color.Contents.Click,
        },
      ]}
    >
      {item.dailyReadingTime}
    </Text>
  </Pressable>
);

type StatusListProps = {
  cards: TChallengeDetailParticipantsRes[];
  setClickStatus: React.Dispatch<
    React.SetStateAction<TChallengeDetailParticipantsRes | null>
  >;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const StatusList = ({
  cards,
  setClickStatus,
  setIsModalVisible,
}: StatusListProps) => {
  return (
    <View style={styles.statusWrap}>
      <Text style={styles.statusText}>현황</Text>
      <View style={styles.statusItemWrap}>
        {cards.map((card) => (
          <CardItem
            key={card.participantId}
            item={card}
            onPress={() => {
              setClickStatus(card);
              setIsModalVisible(true);
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default StatusList;
