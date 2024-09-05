import React, { useState } from "react";
import { View, SafeAreaView, Pressable } from "react-native";
import LogoIcon from "../../assets/images/icon/Logo.svg";
import AlertIcon from "../../assets/images/icon/Alert.svg";
import AlertVariantIcon from "../../assets/images/icon/AlertVariant.svg";
import { styles } from "../../styles/header/HeaderStyle";

export default function MainHeader({ navigation }: { navigation: any }) {
  const [isAlert, setIsAlert] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <LogoIcon />
        {isAlert ? (
          <Pressable
            onPress={() => navigation.navigate("Alert")}
            style={styles.buttonWrap}
          >
            <AlertVariantIcon />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => navigation.navigate("Alert")}
            style={styles.buttonWrap}
          >
            <AlertIcon />
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
}
