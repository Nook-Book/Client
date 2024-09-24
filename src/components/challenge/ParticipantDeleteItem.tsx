import React from "react";
import { Text, Pressable, Image } from "react-native";
import { styles } from "../../styles/challenge/EditParticipantPageStyle";

const ParticipantDeleteItem = ({
  item,
}: {
  item: { id: number; image: any; name: string; isOwner: boolean };
}) => {
  return (
    <Pressable style={styles.participantWrap}>
      <Image source={item.image} style={styles.participantImage} />
      <Text style={styles.participantText}>{item.name}</Text>
      {item.isOwner && <Text style={styles.ownerText}>방장</Text>}
    </Pressable>
  );
};

export default React.memo(ParticipantDeleteItem);
