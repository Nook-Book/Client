import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useMyPage } from "../../hooks/mypage/useMyPage";
import { styles } from "../../styles/myPage/Profile";
import { NavigationProp } from "../../types/search";

const Profile = () => {
  const navigation = useNavigation<NavigationProp>();

  const { data } = useMyPage();
  const myInfo = data.information;

  return (
    <View style={styles.container}>
      {/* <ProfileImage style={styles.profileImage} /> */}
      <Image
        source={{ uri: data.information.imageUrl }}
        style={styles.profileImage}
      />
      <View style={styles.profileContainer}>
        {/* <View style={styles.nameContainer}> */}
        <Text style={styles.name}>{myInfo.nickname}</Text>
        <Text style={styles.email}>@{myInfo.nicknameId}</Text>
        {/* </View> */}
        <View style={styles.friendContainer}>
          <Text style={styles.friendName}>친구</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FriendPage");
            }}
          >
            <Text style={styles.friendNumber}>{myInfo.friendsNum}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("EditProfilePage");
        }}
        style={styles.friendButton}
      >
        <Text style={styles.buttonText}>프로필 편집</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
