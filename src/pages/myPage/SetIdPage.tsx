import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import XMini from "../../assets/images/icon/XMini.svg";
import { useMyPage, usePutId } from "../../hooks/mypage/useMyPage";
import { styles } from "../../styles/myPage/editProfilePage/SetProfile";
import { NavigationProp } from "../../types/search";
import EditHeader from "../../components/header/EditHeader";

const SetIdPage = () => {
  const { data, refetch } = useMyPage();
  const [newId, setNewId] = useState<string>(data.information.nicknameId);

  const navigation = useNavigation<NavigationProp>();
  const { mutate: changeId } = usePutId();

  const handleIdSubmit = () => {
    if (newId !== "") {
      changeId(newId, {
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
    setNewId("");
  };

  return (
    <View style={styles.container}>
      <EditHeader
        text={"아이디 편집"}
        isTextVisible={true}
        onCancel={() => navigation.goBack()}
        onComplete={handleIdSubmit}
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
