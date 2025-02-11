import React from "react";
import { Text, Pressable, Image } from "react-native";
import { styles } from "../../styles/challenge/AddParticipantModalStyle";
import { Color } from "../../styles/Theme";
import { TInviteContentRes } from "../../types/challenge";

const ParticipantItem = ({
  item,
  isSelected,
  onSelect,
}: {
  item: TInviteContentRes;
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
      <Image source={{ uri: item.imageUrl }} style={styles.participantImage} />
      <Text
        style={
          (styles.participantText,
          {
            color: item.invitable ? Color.Typo.Primary : Color.Contents.Default,
          })
        }
      >
        {item.nickname}
      </Text>
      {!item.invitable && <Text style={styles.requestText}>요청됨</Text>}
    </Pressable>
  );
};

export default React.memo(ParticipantItem);
