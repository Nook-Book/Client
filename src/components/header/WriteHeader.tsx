import React from "react";
import { View, SafeAreaView, Pressable } from "react-native";
import CancelIcon from "../../assets/images/icon/Cancel.svg";
import CheckIcon from "../../assets/images/icon/Check.svg";
import { styles } from "../../styles/header/HeaderStyle";

export default function WriteHeader({
  navigation,
  isText,
  checkClick,
}: {
  navigation: any;
  isText: boolean;
  checkClick: () => void;
}) {
  return (
    <SafeAreaView>
      <View style={styles.rightContainer}>
        {isText ? (
          <Pressable
            onPress={() => {
              navigation.goBack();
              checkClick;
            }}
            style={styles.buttonWrap}
          >
            <CheckIcon />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.buttonWrap}
          >
            <CancelIcon />
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}
