import React, { useState } from "react";

import { Button, Modal, Text, TouchableOpacity, View } from "react-native";
import WebView from "react-native-webview";
import GoogleLogo from "../../assets/images/icon/GoogleLogo.svg";
import KakaoLogo from "../../assets/images/icon/KakaoLogo.svg";
import Logo from "../../assets/images/icon/Logo.svg";
import NaverLogo from "../../assets/images/icon/NaverLogo.svg";

import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/login/LoginPage";
import { NavigationProp } from "../../types/search";

const LoginPage = () => {
  const navigation = useNavigation<NavigationProp>();
  const [isWebViewVisible, setIsWebViewVisible] = useState(false);
  const [authorizationCookie, setAuthorizationCookie] = useState<string | null>(
    null
  );
  const REST_API_KEY = process.env.EXPO_PUBLIC_REST_API_KEY;
  const KAKAO_AUTH_URL = "https://kauth.kakao.com/oauth/authorize";
  const REDIRECT_URI = "https://auth.expo.io/";
  const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

  function KakaoLoginWebView(data: string) {
    const exp = "code=";
    const condition = data.indexOf(exp);
    if (condition != -1) {
      const authorize_code = data.substring(condition + exp.length);
      console.log(authorize_code);
      // 백앤드 검증 로직 추가

      setIsWebViewVisible(false);
      navigation.navigate("JoinPage");
    }
  }

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.kakaoButton}
          // onPress={() => {
          //   navigation.navigate("JoinPage");
          // }}
          onPress={() => setIsWebViewVisible(true)}
        >
          <KakaoLogo />
          <Text style={styles.kakaoButtonText}>
            카카오로 시작하기
            {authorizationCookie ? `: ${authorizationCookie}` : ""}
          </Text>
        </TouchableOpacity>
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity>
            <NaverLogo />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.googleButton}
            onPress={() => console.log("TEST")}
          >
            <GoogleLogo />
          </TouchableOpacity>
        </View>
      </View>

      {/* WebView Modal */}
      <Modal visible={isWebViewVisible} animationType="slide">
        <View style={{ flex: 1, marginTop: 50 }}>
          <View style={{ alignSelf: "flex-start", marginLeft: 10 }}>
            <Button title="닫기" onPress={() => setIsWebViewVisible(false)} />
          </View>
          <Text>{authorizationCookie}</Text>
          <WebView
            source={{
              uri: `${KAKAO_AUTH_URL}?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`,
            }}
            style={{ flex: 1, width: "100%" }}
            injectedJavaScript={INJECTED_JAVASCRIPT}
            onMessage={(event) => {
              KakaoLoginWebView(event.nativeEvent["url"]);
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default LoginPage;
