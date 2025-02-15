import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "../../styles/challenge/ChallengeCardStyle";
import { Color, Effect } from "../../styles/Theme";
import { TChallengeDetailParticipantsRes } from "../../types/challenge";

const ChallengeCard = ({
  clickStatus,
  handleStatus,
  handleCancel,
}: {
  clickStatus: TChallengeDetailParticipantsRes | null;
  handleStatus: () => void;
  handleCancel: () => void;
}) => {
  return (
    <View style={styles.container}>
      {clickStatus && (
        <View style={styles.modal}>
          <View style={styles.topWrap}>
            <View style={styles.profileWrap}>
              <Image
                source={{ uri: clickStatus.participantImage }}
                style={styles.profileImage}
              />
              <Text style={styles.profileText}>{clickStatus.nickname}</Text>
              <Pressable
                style={styles.profileBtn}
                onPress={() => console.log("찌르기", clickStatus.participantId)}
              >
                <Text style={styles.profileBtnText}>찌르기</Text>
              </Pressable>
            </View>
            <Text style={styles.timeText}>
              {clickStatus.dailyReadingTime || " 00 : 00 : 00"}
            </Text>
            <View style={styles.bookWrap}>
              <View
                style={{
                  ...Effect.ImageStandard,
                }}
              >
                <Image
                  source={{ uri: clickStatus.readingBookImage }}
                  style={styles.bookImage}
                />
              </View>
              <View style={styles.bookTextWrap}>
                <Text style={styles.bookText}>
                  {clickStatus.readingBookTitle}
                </Text>
                <Text
                  style={[
                    styles.bookStatusText,
                    {
                      color:
                        clickStatus.participantStatus === "RESTING"
                          ? Color.Typo.Secondary
                          : Color.Click[400],
                    },
                  ]}
                >
                  {clickStatus.participantStatus === "RESTING"
                    ? "최근 읽음"
                    : "읽는 중"}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomWrap}>
            <Pressable style={styles.buttonWrap} onPress={handleStatus}>
              <Text
                style={[
                  styles.buttonText,
                  {
                    color: Color.Contents.Click,
                  },
                ]}
              >
                통계
              </Text>
            </Pressable>
            <Pressable style={styles.buttonWrap} onPress={handleCancel}>
              <Text
                style={[
                  styles.buttonText,
                  {
                    color: Color.Typo.Primary,
                  },
                ]}
              >
                취소
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

export default ChallengeCard;
