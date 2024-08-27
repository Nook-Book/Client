import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from "../../styles/challenge/ChallengeCardStyle";
import { Color, Effect } from "../../styles/Theme";

const ChallengeCard = ({
  handleStatus,
  handleCancel,
}: {
  handleStatus: () => void;
  handleCancel: () => void;
}) => {
  const isRead = true;

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.topWrap}>
          <View style={styles.profileWrap}>
            <Image
              source={require("../../assets/images/dummy/book/2.png")}
              style={styles.profileImage}
            />
            <Text style={styles.profileText}>야옹아멍멍해봐</Text>
            <Pressable style={styles.profileBtn}>
              <Text style={styles.profileBtnText}>찌르기</Text>
            </Pressable>
          </View>
          <Text style={styles.timeText}>00 : 48 : 13</Text>
          <View style={styles.bookWrap}>
            <View
              style={{
                ...Effect.ImageStandard,
              }}
            >
              <Image
                source={require("../../assets/images/dummy/book/2.png")}
                style={styles.bookImage}
              />
            </View>
            <View style={styles.bookTextWrap}>
              <Text style={styles.bookText}>몰입 : 인생을 바꾸는 자기혁명</Text>
              <Text
                style={[
                  styles.bookStatusText,
                  {
                    color: isRead ? Color.Click[400] : Color.Typo.Secondary,
                  },
                ]}
              >
                {isRead ? "읽는 중" : "최근 읽음"}
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
    </View>
  );
};

export default ChallengeCard;
