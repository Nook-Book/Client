import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import CameraIcon from "../../assets/images/icon/CameraIcon.svg";
import BackTitleHeader from "../../components/header/BackTitleHeader";
import ChangeProfileModal from "../../components/myPage/editProfile/ChangeProfileModal";
import EditBox from "../../components/myPage/editProfile/EditBox";
import { useMyPage } from "../../hooks/mypage/useMyPage";
import { styles } from "../../styles/myPage/editProfilePage/EditProfilePage";
const EditProfilePage = ({ navigation }: { navigation: any }) => {
  const { data, refetch } = useMyPage();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <BackTitleHeader
        title={""}
        isTitleVisible={false}
        navigation={navigation}
      />
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={() => setIsShowModal(true)}>
          <Image
            source={{ uri: data.information.imageUrl }}
            style={styles.profileImage}
          />
          <CameraIcon style={styles.cameraIcon} />
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
      {isShowModal && <View style={styles.overlay} />}
      <ChangeProfileModal
        isVisible={isShowModal}
        onClose={() => setIsShowModal(false)}
        refetch={refetch}
      />
    </View>
  );
};

export default EditProfilePage;
