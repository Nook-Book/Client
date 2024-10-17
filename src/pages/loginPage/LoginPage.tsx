import React from "react";
import { Text, View } from "react-native";
import GoogleLogo from "../../assets/images/icon/GoogleLogo.svg";
import KakaoLogo from "../../assets/images/icon/KakaoLogo.svg";
import Logo from "../../assets/images/icon/Logo.svg";
import NaverLogo from "../../assets/images/icon/NaverLogo.svg";

import { styles } from "../../styles/login/LoginPage";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <View style={styles.buttonContainer}>
        <View style={styles.kakaoButton}>
          <KakaoLogo />
          <Text style={styles.kakaoButtonText}>카카오로 시작하기</Text>
        </View>
        <View style={styles.bottomButtonContainer}>
          <NaverLogo />
          <View style={styles.googleButton}>
            <GoogleLogo />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
