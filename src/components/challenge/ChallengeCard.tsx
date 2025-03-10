import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "../../styles/challenge/ChallengeCardStyle";
import { Color, Effect } from "../../styles/Theme";
import { TChallengeDetailParticipantsRes } from "../../types/challenge";
import ChallengeToast from "./ChallengeToast";

const ChallengeCard = ({
  clickStatus,
  handleStatus,
  handleCancel,
}: {
  clickStatus: TChallengeDetailParticipantsRes | null;
  handleStatus: () => void;
  handleCancel: () => void;
}) => {
  const [toastVisible, setToastVisible] = useState(false);

  const handlePress = () => {
    console.log("깨우기", clickStatus?.participantId);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 1200);
  };

  return (
    <View style={styles.container}>
      {clickStatus && (
        <View style={{ position: "relative", width: "100%" }}>
          <View style={styles.modal}>
            <View style={styles.topWrap}>
              <View style={styles.profileWrap}>
                <Image
                  source={{ uri: clickStatus.participantImage }}
                  style={styles.profileImage}
                />
                <Text style={styles.profileText}>{clickStatus.nickname}</Text>
                <Pressable
                  style={[
                    styles.profileBtn,
                    {
                      backgroundColor: toastVisible
                        ? Color.Field[15]
                        : Color.Secondary,
                    },
                  ]}
                  onPress={handlePress}
                >
                  <Text style={styles.profileBtnText}>깨우기</Text>
                </Pressable>
              </View>
              <Text
                style={[
                  styles.timeText,
                  {
                    color: clickStatus.reading
                      ? Color.Typo.Primary
                      : Color.Typo.Secondary,
                  },
                ]}
              >
                {clickStatus.dailyReadingTime.replaceAll(":", " : ") ||
                  " 00 : 00 : 00"}
              </Text>
              {clickStatus.readingBookTitle && clickStatus.readingBookImage && (
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
                          color: clickStatus.reading
                            ? Color.Click[400]
                            : Color.Typo.Secondary,
                        },
                      ]}
                    >
                      {clickStatus.reading ? "읽는 중" : "최근 읽음"}
                    </Text>
                  </View>
                </View>
              )}
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
          <ChallengeToast
            message={`${clickStatus?.nickname}님을 깨웠습니다!`}
            visible={toastVisible}
          />
        </View>
      )}
    </View>
  );
};

export default ChallengeCard;
