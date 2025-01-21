import React from "react";
import { Text, Pressable, Image } from "react-native";
import { styles } from "../../styles/challenge/AddParticipantModalStyle";
import { Color } from "../../styles/Theme";

const ParticipantItem = ({
  item,
  isSelected,
  onSelect,
}: {
  item: { id: number; image: any; name: string };
  isSelected: boolean;
  onSelect: () => void;
}) => {
  return (
    <Pressable
      style={[
        styles.participantWrap,
        {
          backgroundColor: isSelected ? Color.Field.Primary : "transparent",
        },
      ]}
      onPress={onSelect}
    >
      <Image source={item.image} style={styles.participantImage} />
      <Text style={styles.participantText}>{item.name}</Text>
    </Pressable>
  );
};

export default React.memo(ParticipantItem);
