import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import BackTitleHeader from "../../components/header/BackTitleHeader";
import CheckButton from "../../components/login/CheckButton";
import {
  useUserIdCheck,
  useUserInfo,
  useUserNicknameCheck,
} from "../../hooks/user/useUser";
import { styles } from "../../styles/join/joinPage";
import { Color, Font } from "../../styles/Theme";
import { NavigationProp } from "../../types/search";
const JoinPage = () => {
  const navigation = useNavigation<NavigationProp>();

  // 입력값 상태
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");

  // 입력값 Ref
  const idInputRef = useRef<TextInput>(null);
  const nicknameInputRef = useRef<TextInput>(null);

  // 중복 체크 상태
  const [isIdChecked, setIsIdChecked] = useState<
    "OK" | "Duplicate" | "OnlyNumber" | "No"
  >("No");
  const [isNicknameChecked, setIsNicknameChecked] = useState<
    "OK" | "Duplicate" | "OverLength" | "No"
  >("No");

  // 회원가입 훅
  const { mutate: checkId } = useUserIdCheck();
  const { mutate: checkNickname } = useUserNicknameCheck();
  const { mutate: join } = useUserInfo();

  // 중복 체크 핸들러
  const handleIdCheck = () => {
    checkId(
      { nicknameId: id },
      {
        onSuccess: (data) => {
          if (data.information.is_unique) {
            setIsIdChecked("OK");
          } else {
            setIsIdChecked("Duplicate");
          }
        },
        onError: (error) => {
          console.log(error);
          if (id.length > 10) {
            setIsIdChecked("No");
          } else {
            setIsIdChecked("OnlyNumber");
          }
        },
      }
    );
  };

  // 닉네임 중복 체크 핸들러
  const handleNicknameCheck = () => {
    if (nickname.length > 10) {
      setIsNicknameChecked("OverLength");
      return;
    }
    checkNickname(
      { nickname: nickname },
      {
        onSuccess: (data) => {
          if (data.information.is_unique) {
            setIsNicknameChecked("OK");
          } else {
            setIsNicknameChecked("Duplicate");
          }
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  // 가입하기 핸들러
  const handleJoin = () => {
    join(
      { nickname: nickname, nicknameId: id },
      {
        onSuccess: (data) => {
          console.log(data);
          navigation.navigate("LoginPage");
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <View style={styles.container}>
      <BackTitleHeader
        title={"회원가입"}
        isTitleVisible={true}
        navigation={navigation}
      />

      {/* id */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>아이디</Text>
        <View style={{ position: "relative" }}>
          <TextInput
            ref={idInputRef}
            style={styles.input}
            value={id}
            onChangeText={(text) => {
              setId(text);
              setIsIdChecked("No");
            }}
            placeholder="아이디를 입력해주세요."
            placeholderTextColor={Color.Typo.Secondary}
            {...Font.Paragraph.SemiMedium}
          />
          <CheckButton
            onPress={handleIdCheck}
            isActive={id.length > 0 && isIdChecked !== "OK"}
          />
        </View>
        {/* 사용 가능한 경우  */}
        {isIdChecked === "OK" && (
          <Text style={styles.checkText}>사용 가능한 아이디입니다.</Text>
        )}
        {/* 중복 체크 경우 */}
        {isIdChecked === "Duplicate" && (
          <Text style={styles.checkText}>이미 사용 중인 아이디입니다.</Text>
        )}
        {/* 숫자만 입력 경우 */}
        {isIdChecked === "OnlyNumber" && (
          <Text style={styles.checkText}>
            아이디에 숫자만 포함할 수 없습니다.
          </Text>
        )}
        {/* 길이 초과 경우 */}
        {isIdChecked === "No" && (
          <Text style={styles.checkText}>
            영문,숫자를 사용한 10글자 이내입니다.
          </Text>
        )}
      </View>

      {/* nickname */}
      <View style={[styles.inputContainer, { marginTop: 50 }]}>
        <Text style={styles.label}>닉네임</Text>
        <View style={{ position: "relative" }}>
          <TextInput
            ref={nicknameInputRef}
            style={styles.input}
            value={nickname}
            onChangeText={(text) => {
              setNickname(text);
              setIsNicknameChecked("No"); // 입력값 변경 시 체크 상태 초기화
            }}
            placeholder="닉네임을 입력해주세요."
            placeholderTextColor={Color.Typo.Secondary}
            {...Font.Paragraph.SemiMedium}
          />
          <CheckButton
            onPress={handleNicknameCheck}
            isActive={nickname.length > 0 && isNicknameChecked !== "OK"}
          />
        </View>
        {isNicknameChecked === "OK" && (
          <Text style={styles.checkText}>사용 가능한 닉네임입니다.</Text>
        )}
        {isNicknameChecked === "Duplicate" && (
          <Text style={styles.checkText}>이미 사용 중인 닉네임입니다.</Text>
        )}
        {isNicknameChecked === "OverLength" && (
          <Text style={styles.checkText}>10자 이하로 입력해주세요.</Text>
        )}
      </View>

      {/* 가입하기 */}
      <TouchableOpacity
        style={[
          styles.joinButton,
          isIdChecked === "OK" &&
            isNicknameChecked === "OK" &&
            styles.activeJoinButton,
        ]}
        disabled={isIdChecked !== "OK" || isNicknameChecked !== "OK"}
        onPress={handleJoin}
      >
        <Text
          style={[
            styles.joinButtonText,
            isIdChecked === "OK" &&
              isNicknameChecked === "OK" &&
              styles.activeJoinButtonText,
          ]}
        >
          가입하기
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default JoinPage;
