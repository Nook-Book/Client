import React from "react";
import { View, SafeAreaView, Pressable } from "react-native";
import CancelIcon from "../../assets/images/icon/Cancel.svg";
import CheckIcon from "../../assets/images/icon/Check.svg";
import LockOpenIcon from "../../assets/images/icon/LockOpen.svg";
import LockCloseIcon from "../../assets/images/icon/LockClose.svg";
import { styles } from "../../styles/header/HeaderStyle";

export default function WriteHeader({
  isText,
  isLock,
  onLockPress,
  onCheckPress,
  onCancelPress,
}: {
  isText: boolean;
  isLock: boolean;
  onLockPress: () => void;
  onCheckPress: () => void;
  onCancelPress: () => void;
}) {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.rightWriteContainer}>
        {isLock ? (
          <Pressable onPress={onLockPress} style={styles.buttonSmallWrap}>
            <LockCloseIcon />
          </Pressable>
        ) : (
          <Pressable onPress={onLockPress} style={styles.buttonSmallWrap}>
            <LockOpenIcon />
          </Pressable>
        )}
        {isText ? (
          <Pressable onPress={onCheckPress} style={styles.buttonSmallWrap}>
            <CheckIcon />
          </Pressable>
        ) : (
          <Pressable onPress={onCancelPress} style={styles.buttonSmallWrap}>
            <CancelIcon />
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}
