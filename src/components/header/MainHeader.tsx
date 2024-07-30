import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import LogoIcon from "../../assets/images/icon/Logo.svg";
import AlertIcon from "../../assets/images/icon/Alert.svg";
import AlertVariantIcon from "../../assets/images/icon/AlertVariant.svg";
import { styles } from "../../styles/header/MainHeaderStyle";

export default function MainHeader({ navigation }: { navigation: any }) {
  const [isAlert, setIsAlert] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <LogoIcon />
        {isAlert ? (
          <AlertVariantIcon onPress={() => navigation.navigate("Alert")} />
        ) : (
          <AlertIcon onPress={() => navigation.navigate("Alert")} />
        )}
      </View>
    </SafeAreaView>
  );
}
