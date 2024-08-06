import React from "react";
import { View, SafeAreaView } from "react-native";
import CancelIcon from "../../assets/images/icon/Cancel.svg";
import CheckIcon from "../../assets/images/icon/Check.svg";
import { styles } from "../../styles/header/WriteHeaderStyle";

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
      <View style={styles.container}>
        {isText ? (
          <CheckIcon
            onPress={() => {
              navigation.goBack();
              checkClick();
            }}
          />
        ) : (
          <CancelIcon onPress={() => navigation.goBack()} />
        )}
      </View>
    </SafeAreaView>
  );
}
