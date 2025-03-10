import React, { useState, useEffect } from "react";
import { Text, Animated } from "react-native";
import { Color, Font } from "../../styles/Theme";

const ChallengeToast = ({
  message,
  visible,
}: {
  message: string;
  visible: boolean;
}) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }, 1200);
    }
  }, [visible]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        position: "absolute",
        bottom: -60,
        left: "50%",
        transform: [{ translateX: "-50%" }],
        backgroundColor: Color.Secondary,
        borderRadius: 100,
        borderWidth: 0.8,
        borderColor: Color.Border.Stroke,
        paddingVertical: 8,
        paddingHorizontal: 23,
      }}
    >
      <Text
        style={{
          ...Font.Paragraph.SemiMedium,
          color: Color.Typo.Primary,
        }}
      >
        {message}
      </Text>
    </Animated.View>
  );
};

export default ChallengeToast;
