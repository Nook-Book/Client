import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import MyPageAtherNav from "../../components/myPage/MyPageAtherNav";
import { styles } from "../../styles/login/JoinPage";
import { Color } from "../../styles/Theme";
import { idNumberRegex, idRegex } from "../../utils/checkInfo";

const JoinPage = () => {
  const [id, setId] = useState<string>("");
  const [idNotice, setIdNotice] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nameNotice, setNameNotice] = useState<string>("");
  const [isIdFocused, setIsIdFocused] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);

  const handleCheckId = () => {
    if (idNumberRegex.test(id)) {
      setIdNotice("아이디에 숫자만 포함될 수 없습니다.");
    } else if (!idRegex.test(id)) {
      setIdNotice("영문,숫자를 사용한 10글자 이내입니다.");
    } else {
      setIdNotice("사용 가능한 아이디입니다.");
    }
    //이미 존재하는 id 구분 과정 필요
  };

  const handleCheckName = () => {
    if (name.length > 10) {
      setNameNotice("10자 이내입니다.");
    }
  };

  return (
    <View style={styles.container}>
      <MyPageAtherNav title="회원가입" />
      <View style={styles.contentContainer}>
        <Text style={styles.label}>아이디</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, isIdFocused && styles.inputFocused]}
            placeholder={"아이디를 입력해주세요."}
            value={id}
            onChangeText={setId}
            placeholderTextColor={Color.Typo.Secondary}
            onFocus={() => setIsIdFocused(true)}
            onBlur={() => setIsIdFocused(false)}
          />
          <TouchableOpacity
            style={[styles.button, id.length > 0 && styles.buttonFocused]}
            onPress={handleCheckId}
            disabled={id.length === 0}
          >
            <Text style={[styles.text, id.length > 0 && styles.textFocused]}>
              중복 확인
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.notice}>{idNotice}</Text>

        <Text style={styles.nameLabel}>닉네임</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, isNameFocused && styles.inputFocused]}
            placeholder={"닉네임을 입력해주세요."}
            value={name}
            onChangeText={setName}
            placeholderTextColor={Color.Typo.Secondary}
            onFocus={() => setIsNameFocused(true)}
            onBlur={() => setIsNameFocused(false)}
          />
          <TouchableOpacity
            style={[styles.button, name.length > 0 && styles.buttonFocused]}
            onPress={handleCheckName}
            disabled={name.length === 0}
          >
            <Text style={[styles.text, name.length > 0 && styles.textFocused]}>
              중복 확인
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.notice}>{nameNotice}</Text>
      </View>
    </View>
  );
};

export default JoinPage;
