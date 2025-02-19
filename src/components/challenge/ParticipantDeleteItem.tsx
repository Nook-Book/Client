import React from "react";
import { Text, Pressable, Image, View } from "react-native";
import { styles } from "../../styles/challenge/EditParticipantPageStyle";
import { TParticipantListRes } from "../../types/challenge";
import CheckSmallIcon from "../../assets/images/icon/CheckSmall.svg";
import ArrowDownIcon from "../../assets/images/icon/ArrowDown.svg";
import { Color } from "../../styles/Theme";

const ParticipantDeleteItem = ({
  item,
  openId,
  setOpenId,
  onOwner,
  onDelete,
}: {
  item: TParticipantListRes;
  openId: number | null;
  setOpenId: React.Dispatch<React.SetStateAction<number | null>>;
  onOwner: () => void;
  onDelete: () => void;
}) => {
  return (
    <View style={styles.participantWrap}>
      <Image
        source={{ uri: item.participantImage }}
        style={styles.participantImage}
      />
      <Text style={styles.participantText}>{item.participantNickname}</Text>
      <View>
        {item.role === "방장" && <Text style={styles.ownerText}>방장</Text>}
        {item.role === "일반" &&
          (item.participantId === openId ? (
            <View style={[styles.roleWrap, { zIndex: 10 }]}>
              <Pressable style={styles.roleOpenItem} onPress={onOwner}>
                <Text
                  style={[styles.roleText, { color: Color.Contents.Click }]}
                >
                  방장
                </Text>
              </Pressable>
              <Pressable
                style={styles.roleOpenItem}
                onPress={() => setOpenId(null)}
              >
                <Text style={styles.roleText}>일반</Text>
                <CheckSmallIcon />
              </Pressable>
              <Pressable
                style={[
                  styles.roleOpenItem,
                  {
                    borderTopColor: Color.Border.Primary,
                    borderTopWidth: 0.5,
                  },
                ]}
                onPress={onDelete}
              >
                <Text style={styles.roleText}>삭제하기</Text>
              </Pressable>
            </View>
          ) : (
            <Pressable
              style={styles.roleItem}
              onPress={() => {
                setOpenId(item.participantId);
              }}
            >
              <Text style={[styles.roleText, { color: Color.Contents.Click }]}>
                일반
              </Text>
              <ArrowDownIcon />
            </Pressable>
          ))}
      </View>
    </View>
  );
};

export default React.memo(ParticipantDeleteItem);
