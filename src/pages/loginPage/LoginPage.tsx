import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, Modal, Text, TouchableOpacity, View } from "react-native";
import WebView from "react-native-webview";
import KakaoLogo from "../../assets/images/icon/KaKaoLogo.svg";
import Logo from "../../assets/images/icon/temporaryLogo.svg";
import { useAuth } from "../../context/AuthContext";
import { useGetRegistered, useKakaoLogin } from "../../hooks/auth/useAuth";
import { styles } from "../../styles/login/LoginPage";
import { NavigationProp } from "../../types/search";
import { storage } from "../../utils/storage";

const LoginPage = () => {
  const navigation = useNavigation<NavigationProp>();
  const [isWebViewVisible, setIsWebViewVisible] = useState(false);
  const REST_API_KEY = process.env.EXPO_PUBLIC_API_KEY;
  const KAKAO_AUTH_URL = "https://kauth.kakao.com/oauth/authorize";
  const REDIRECT_URI = "https://auth.expo.io/";
  const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;
  const { mutate: kakaoLogin } = useKakaoLogin();
  const { data: getRegistered } = useGetRegistered();
  const { setIsLogin } = useAuth();

  function KakaoLoginWebView(data: string) {
    const exp = "code=";
    const condition = data.indexOf(exp);
    if (condition != -1) {
      const authorize_code = data.substring(condition + exp.length);
      fetch("https://kauth.kakao.com/oauth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${authorize_code}`,
      })
        .then((response) => response.json())
        .then((data) => {
          const payload = data.id_token.split(".")[1];
          const decoded = JSON.parse(atob(payload));
          const email = decoded.email;
          const accessToken = data.access_token;

          kakaoLogin(
            {
              email,
              accessToken,
            },
            {
              onSuccess: async (response) => {
                await storage.setTokens({
                  accessToken: response.information.accessToken,
                  refreshToken: response.information.refreshToken,
                });
                console.log(getRegistered);
                if (!getRegistered?.information.registered) {
                  navigation.navigate("JoinPage");
                } else {
                  setIsLogin(true);
                }
              },
              onError: () => {
                console.log("Error");
              },
            }
          );
        })
        .catch((error) => console.error("Error fetching access token:", error));

      setIsWebViewVisible(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo style={styles.logo} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.kakaoButton}
            onPress={() => setIsWebViewVisible(true)}
          >
            <KakaoLogo />
            <Text style={styles.kakaoButtonText}>카카오로 시작하기</Text>
          </TouchableOpacity>
          {/* <View style={styles.bottomButtonContainer}>
            <TouchableOpacity>
              <NaverLogo />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.googleButton}
              onPress={() => console.log("TEST")}
            >
              <GoogleLogo />
            </TouchableOpacity>
          </View> */}
        </View>
      </View>

      {/* WebView Modal */}
      <Modal visible={isWebViewVisible} animationType="slide">
        <View style={{ flex: 1, marginTop: 50 }}>
          <View style={{ alignSelf: "flex-start", marginLeft: 10 }}>
            <Button title="닫기" onPress={() => setIsWebViewVisible(false)} />
          </View>
          <WebView
            source={{
              uri: `${KAKAO_AUTH_URL}?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`,
            }}
            style={{ flex: 1, width: "100%" }}
            injectedJavaScript={INJECTED_JAVASCRIPT}
            onMessage={(event) => {
              KakaoLoginWebView(event.nativeEvent.url);
            }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default LoginPage;
