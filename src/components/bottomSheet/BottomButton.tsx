import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "../../styles/bottomSheet/BottomButtonStyle";
import { Color } from "../../styles/Theme";

const BottomButton = ({
  handleAccept,
  handleReject,
}: {
  handleAccept: () => void;
  handleReject: () => void;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.bottomWrap}>
        <Pressable
          style={[styles.button, { backgroundColor: Color.Click[400] }]}
          onPress={handleAccept}
        >
          <Text
            style={[
              styles.buttonText,
              {
                color: Color.Secondary,
              },
            ]}
          >
            수락하기
          </Text>
        </Pressable>
        <Pressable
          style={[styles.button, { backgroundColor: Color.Field.Background }]}
          onPress={handleReject}
        >
          <Text
            style={[
              styles.buttonText,
              {
                color: Color.Typo.Secondary,
              },
            ]}
          >
            거절하기
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BottomButton;
