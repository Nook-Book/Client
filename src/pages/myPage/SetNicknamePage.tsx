import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import XMini from "../../assets/images/icon/XMini.svg";
import SetProfileNav from "../../components/myPage/editProfile/SetProfileNav";
import { useMyPage, usePutNickname } from "../../hooks/mypage/useMyPage";
import { styles } from "../../styles/myPage/editProfilePage/SetProfile";
import { NavigationProp } from "../../types/search";

const SetNicknamePage = () => {
  const { data, refetch } = useMyPage();
  const [newNickname, setNewNickname] = useState<string>(
    data.information.nickname
  );

  const navigation = useNavigation<NavigationProp>();
  const { mutate: changeNickname } = usePutNickname();

  const handleNicknameSubmit = () => {
    if (newNickname !== "") {
      changeNickname(newNickname, {
        onSuccess: () => {
          navigation.navigate("EditProfilePage");
          refetch();
        },
        onError: () => {
          alert("Error");
        },
      });
    }
  };

  const deleteInputValue = () => {
    setNewNickname("");
  };

  return (
    <View style={styles.container}>
      <SetProfileNav title="닉네임 편집" onClick={handleNicknameSubmit} />
      <View style={styles.inputContainer}>
        <TextInput
          value={newNickname}
          onChangeText={setNewNickname}
          style={styles.textInput}
          onSubmitEditing={handleNicknameSubmit}
        />
        <TouchableOpacity onPress={deleteInputValue}>
          <XMini />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SetNicknamePage;
