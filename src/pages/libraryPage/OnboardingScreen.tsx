import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TouchIcon from "../../assets/images/onBoarding/Touch.svg";
import { styles } from "./OnboardingScreenStyle";

const OnboardingOverlay = ({ onDismiss }: { onDismiss: any }) => {
  return (
    <TouchableOpacity style={styles.overlayTouch} onPress={onDismiss}>
      <View style={styles.overlayContainer}>
        <TouchIcon />
        <Text style={styles.overlayText}>
          리스트를 꾹 눌러서 편집할 수 있어요!
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default OnboardingOverlay;
