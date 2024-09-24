import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "../../styles/bottomSheet/BottomButtonStyle";
import { Color } from "../../styles/Theme";

const BottomTwoButton = ({
  handleAccept,
  handleReject,
}: {
  handleAccept: () => void;
  handleReject: () => void;
}) => {
  return (
    <View style={styles.betweenContainer}>
      <Pressable
        style={[
          styles.buttonWrap,
          { backgroundColor: Color.Click[400], width: "50%" },
        ]}
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
        style={[
          styles.buttonWrap,
          { backgroundColor: Color.Field.Background, width: "50%" },
        ]}
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
  );
};

export default BottomTwoButton;
