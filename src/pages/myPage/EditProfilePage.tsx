import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import EditProfile from "../../assets/images/profile/EditProfile.svg";
import ChangeProfileModal from "../../components/myPage/editProfile/ChangeProfileModal";
import EditBox from "../../components/myPage/editProfile/EditBox";
import { useMyPage } from "../../hooks/mypage/useMyPage";
import { styles } from "../../styles/myPage/editProfilePage/EditProfilePage";
import { NavigationProp } from "../../types/search";
import BackTitleHeader from "../../components/header/BackTitleHeader";

const EditProfilePage = () => {
  const { data } = useMyPage();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.container}>
      <BackTitleHeader
        title={""}
        isTitleVisible={false}
        navigation={navigation}
      />
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={() => setIsShowModal(true)}>
          <EditProfile />
        </TouchableOpacity>
      </View>
      <EditBox
        title={data.information.nicknameId}
        onClick={() => {
          navigation.navigate("SetIdPage");
        }}
      />
      <EditBox
        title={data.information.nickname}
        onClick={() => {
          navigation.navigate("SetNicknamePage");
        }}
      />

      <ChangeProfileModal
        isVisible={isShowModal}
        onClose={() => setIsShowModal(false)}
      />
    </View>
  );
};

export default EditProfilePage;
