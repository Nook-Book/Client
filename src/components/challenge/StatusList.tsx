import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import ChallangeCardOffIcon from "../../assets/images/challange/ChallangeCardOff.svg";
import ChallangeCardOnIcon from "../../assets/images/challange/ChallangeCardOn.svg";
import { styles } from "../../styles/challenge/ChallengeDetailPageStyle";
import { Color } from "../../styles/Theme";

type CardItemProps = {
  item: {
    id: number;
    isEnabled: boolean;
    name: string;
    time: string;
  };
  onPress: (id: number) => void;
};

const CardItem = ({ item, onPress }: CardItemProps) => (
  <Pressable style={styles.statusCardWrap} onPress={() => onPress(item.id)}>
    {item.isEnabled ? <ChallangeCardOnIcon /> : <ChallangeCardOffIcon />}
    <Text
      style={[
        styles.statusCardText,
        {
          color: item.isEnabled ? Color.Contents.Click : Color.Typo.Secondary,
        },
      ]}
    >
      {item.name}
    </Text>
    <Text
      style={[
        styles.statusCardText,
        {
          color: item.isEnabled ? Color.Contents.Click : Color.Typo.Secondary,
        },
      ]}
    >
      {item.time}
    </Text>
  </Pressable>
);

type StatusListProps = {
  cards: {
    id: number;
    isEnabled: boolean;
    name: string;
    time: string;
  }[];
  setIsModalVisible?: React.Dispatch<React.SetStateAction<boolean>>;
};

const StatusList = ({ cards, setIsModalVisible }: StatusListProps) => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const handleCardPress = (id: number) => {
    setSelectedCardId(id);
    setIsModalVisible && setIsModalVisible(true);
  };

  return (
    <View style={styles.statusWrap}>
      <Text style={styles.statusText}>현황</Text>
      <View style={styles.statusItemWrap}>
        {cards.map((card) => (
          <CardItem key={card.id} item={card} onPress={handleCardPress} />
        ))}
      </View>
    </View>
  );
};

export default StatusList;
