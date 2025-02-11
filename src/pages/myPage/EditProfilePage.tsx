import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import EditProfile from "../../assets/images/profile/EditProfile.svg";
import EditBox from "../../components/myPage/editProfile/EditBox";
import MyPageAtherNav from "../../components/myPage/MyPageAtherNav";
import { useMyPage } from "../../hooks/mypage/useMyPage";
import { styles } from "../../styles/myPage/editProfilePage/EditProfilePage";
import { NavigationProp } from "../../types/search";

const EditProfilePage = () => {
  const { data } = useMyPage();

  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.container}>
      <MyPageAtherNav title="" />
      <View style={styles.profileContainer}>
        <TouchableOpacity>
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
    </View>
  );
};

export default EditProfilePage;
