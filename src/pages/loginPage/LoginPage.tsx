import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
        <TouchableOpacity style={styles.kakaoButton}>
          <KakaoLogo />
          <Text style={styles.kakaoButtonText}>카카오로 시작하기</Text>
        </TouchableOpacity>
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity>
            <NaverLogo />
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton}>
            <GoogleLogo />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
