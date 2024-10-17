import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import ProfileImage from "../../assets/images/profile/ProfileImage.svg";
import { styles } from "../../styles/myPage/Profile";
import { NavigationProp } from "../../types/search";

const Profile = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ProfileImage style={styles.profileImage} />
      <View style={styles.profileContainer}>
        <Text style={styles.name}>응우엔티푸엉민주피쉬</Text>
        <Text style={styles.email}>@minjufish</Text>
        <View style={styles.friendContainer}>
          <Text style={styles.friendName}>친구</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FriendPage");
            }}
          >
            <Text style={styles.friendNumber}>13</Text>
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
