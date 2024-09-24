import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "../../styles/myPage/editProfilePage/EditProfilePage";
import MyPageAtherNav from "../../components/myPage/MyPageAtherNav";
import EditProfile from "../../assets/images/profile/EditProfile.svg";
import EditBox from "../../components/myPage/editProfile/EditBox";
import useProfile from "../../store/useProfile";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../../types/search";

const EditProfilePage = () => {
  const { id, nickname } = useProfile();
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
        title={id}
        onClick={() => {
          navigation.navigate("SetIdPage");
        }}
      />
      <EditBox
        title={nickname}
        onClick={() => {
          navigation.navigate("SetNicknamePage");
        }}
      />
    </View>
  );
};

export default EditProfilePage;
