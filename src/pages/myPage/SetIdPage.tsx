import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import SetProfileNav from "../../components/myPage/editProfile/SetProfileNav";
import { styles } from "../../styles/myPage/editProfilePage/SetProfile";
import useProfile from "../../store/useProfile";
import XMini from "../../assets/images/icon/XMini.svg";

const SetIdPage = () => {
  const { id } = useProfile();
  const [newId, setNewId] = useState<string>(id);

  const handleIdSubmit = () => {
    // 아이디 수정
  };

  const deleteInputValue = () => {
    setNewId("");
  };

  return (
    <View style={styles.container}>
      <SetProfileNav
        title="아이디 편집"
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={newId}
          onChangeText={setNewId}
          style={styles.textInput}
          onSubmitEditing={handleIdSubmit}
        />
        <TouchableOpacity onPress={deleteInputValue}>
          <XMini />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SetIdPage;
