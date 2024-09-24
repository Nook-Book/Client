import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import SetProfileNav from "../../components/myPage/editProfile/SetProfileNav";
import { styles } from "../../styles/myPage/editProfilePage/SetProfile";
import useProfile from "../../store/useProfile";
import XMini from "../../assets/images/icon/XMini.svg";

const SetNicknamePage = () => {
  const { nickname } = useProfile();
  const [newNickname, setNewNickname] = useState<string>(nickname);

  const handleNicknameSubmit = () => {
    // 닉네임 수정
  };

  const deleteInputValue = () => {
    setNewNickname("");
  };

  return (
    <View style={styles.container}>
      <SetProfileNav
        title="닉네임 편집"
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
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
