import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import XMini from "../../assets/images/icon/XMini.svg";
import EditHeader from "../../components/header/EditHeader";
import { useMyPage, usePutNickname } from "../../hooks/mypage/useMyPage";
import { styles } from "../../styles/myPage/editProfilePage/SetProfile";

const SetNicknamePage = ({ navigation }: { navigation: any }) => {
  const { data, refetch } = useMyPage();
  const [isShowError, setIsShowError] = useState<boolean>(false);
  const [newNickname, setNewNickname] = useState<string>(
    data.information.nickname
  );

  const { mutate: changeNickname } = usePutNickname();

  const handleNicknameSubmit = () => {
    if (newNickname !== "") {
      if (newNickname.length > 10) {
        setIsShowError(true);
        return;
      }
      changeNickname(newNickname, {
        onSuccess: () => {
          navigation.navigate("EditProfilePage");
          refetch();
        },
        onError: (e) => {
          setIsShowError(true);
        },
      });
    }
  };

  const deleteInputValue = () => {
    setNewNickname("");
  };

  return (
    <View style={styles.container}>
      <EditHeader
        text={"닉네임 편집"}
        isTextVisible={true}
        onCancel={() => navigation.goBack()}
        onComplete={handleNicknameSubmit}
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
      {isShowError && (
        <Text style={styles.errorText}>닉네임 10자 이내입니다</Text>
      )}
    </View>
  );
};

export default SetNicknamePage;
