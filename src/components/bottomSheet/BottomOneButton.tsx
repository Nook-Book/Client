import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "../../styles/bottomSheet/BottomButtonStyle";
import { Color } from "../../styles/Theme";

const BottomOneButton = ({
  handleAccept,
  text,
  disabled = false,
}: {
  handleAccept: () => void;
  text: string;
  disabled?: boolean;
}) => {
  return (
    <Pressable
      style={[
        styles.buttonWrap,
        {
          backgroundColor: disabled ? Color.Field.Background : Color.Click[400],
        },
      ]}
      onPress={handleAccept}
      disabled={disabled}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: disabled ? Color.Typo.Secondary : Color.Secondary,
          },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default BottomOneButton;
