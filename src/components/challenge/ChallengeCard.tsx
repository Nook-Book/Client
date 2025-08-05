import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "../../styles/challenge/ChallengeCardStyle";
import { Color, Effect } from "../../styles/Theme";
import { TChallengeDetailParticipantsRes } from "../../types/challenge";
import ChallengeToast from "./ChallengeToast";
import { postWakeUp } from "../../api/challenge/postWakeUp";

const ChallengeCard = ({
  challengeId,
  clickStatus,
  handleStatus,
  handleCancel,
  onSuccessRefresh,
}: {
  challengeId: number;
  clickStatus: TChallengeDetailParticipantsRes | null;
  handleStatus: () => void;
  handleCancel: () => void;
  onSuccessRefresh: () => void;
}) => {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handlePress = async () => {
    if (!clickStatus?.participantId) return;

    const lastWakeUpTime = clickStatus.lastWakeUpTime;

    if (lastWakeUpTime) {
      const last = new Date(lastWakeUpTime).getTime();
      const now = Date.now();
      const threeHours = 3 * 60 * 60 * 1000;

      if (now - last < threeHours) {
        showCooldownToast();
        return;
      }
    }

    const response = await postWakeUp(challengeId, clickStatus.participantId);
    if (response.check) {
      showSuccessToast();
      onSuccessRefresh();
    } else {
      if (response.status === 400) {
        showCooldownToast();
      }
    }
  };

  const showSuccessToast = () => {
    setToastMessage(`${clickStatus?.nickname}님을 깨웠습니다!`);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 1200);
  };

  const showCooldownToast = () => {
    setToastMessage("3시간에 1회만 보낼 수 있습니다.");
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 1200);
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
                {!clickStatus.me && (
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
                )}
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
                    <Text
                      style={styles.bookText}
                      numberOfLines={2}
                      ellipsizeMode="tail"
                    >
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
          <ChallengeToast message={toastMessage} visible={toastVisible} />
        </View>
      )}
    </View>
  );
};

export default ChallengeCard;
