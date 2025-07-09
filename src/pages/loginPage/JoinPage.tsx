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
    | "OK"
    | "Duplicate"
    | "OnlyNumber"
    | "OnlyAlpha"
    | "OverLength"
    | "NeedCheck"
    | "No"
  >("No");
  const [isNicknameChecked, setIsNicknameChecked] = useState<
    "OK" | "Duplicate" | "OverLength" | "No"
  >("No");

  // 회원가입 훅
  const { mutate: checkId } = useUserIdCheck();
  const { mutate: checkNickname } = useUserNicknameCheck();
  const { mutate: join } = useUserInfo();

  // 아이디 유효성 검증 함수
  const validateId = (idValue: string) => {
    if (idValue.length === 0) {
      return "No";
    }

    if (idValue.length > 10) {
      return "OverLength";
    }

    const hasAlpha = /[a-zA-Z]/.test(idValue);
    const hasNumber = /[0-9]/.test(idValue);
    const isAlphaNumOnly = /^[a-zA-Z0-9]+$/.test(idValue);

    if (!isAlphaNumOnly) {
      return "No"; // 영문, 숫자 이외의 문자가 포함된 경우
    }

    if (!hasAlpha && hasNumber) {
      return "OnlyNumber"; // 숫자만 포함된 경우
    }

    if (hasAlpha && !hasNumber) {
      return "OnlyAlpha"; // 영문만 포함된 경우
    }

    return "Valid"; // 영문과 숫자가 모두 포함된 유효한 경우
  };

  // 중복 체크 핸들러
  const handleIdCheck = () => {
    const validationResult = validateId(id);

    if (validationResult !== "Valid") {
      setIsIdChecked(validationResult as any);
      return;
    }

    // NeedCheck 상태이거나 Valid한 경우에만 API 호출
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
          setIsIdChecked("NeedCheck"); // 오류 발생 시 다시 체크할 수 있도록
        },
      }
    );
  };

  // 아이디 입력값 변경 핸들러
  const handleIdChange = (text: string) => {
    setId(text);
    const validationResult = validateId(text);

    // 유효한 형식이면 중복체크 필요 상태로, 아니면 해당 오류 상태로 설정
    if (validationResult === "Valid") {
      setIsIdChecked("NeedCheck"); // 중복체크 필요
    } else {
      setIsIdChecked(validationResult as any);
    }
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
            onChangeText={handleIdChange}
            placeholder="아이디를 입력해주세요."
            placeholderTextColor={Color.Typo.Secondary}
            {...Font.Paragraph.SemiMedium}
          />
          <CheckButton
            onPress={handleIdCheck}
            isActive={
              id.length > 0 &&
              (isIdChecked === "NeedCheck" || isIdChecked === "Duplicate")
            }
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
        {/* 영문만 입력 경우 */}
        {isIdChecked === "OnlyAlpha" && (
          <Text style={styles.checkText}>
            영문,숫자를 사용한 10글자 이내입니다.
          </Text>
        )}
        {/* 길이 초과 경우 */}
        {isIdChecked === "OverLength" && (
          <Text style={styles.checkText}>
            영문,숫자를 사용한 10글자 이내입니다.
          </Text>
        )}
        {/* 중복체크 필요한 경우 */}
        {isIdChecked === "NeedCheck" && (
          <Text style={styles.checkText}>중복확인 버튼을 눌러주세요.</Text>
        )}
        {/* 기본 안내 메시지 */}
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
