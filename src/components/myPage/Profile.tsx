import { View, Text, Button, TouchableOpacity } from "react-native";
import ProfileImage from "../../assets/images/profile/ProfileImage.svg";
import { styles } from "../../styles/myPage/Profile";

const Profile = () => {
  const handleEditPress = () => {};

  const handleFriendPress = () => {};

  return (
    <View style={styles.container}>
      <ProfileImage style={styles.profileImage} />
      <View style={styles.profileContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>민주피쉬</Text>
          <Text style={styles.email}>@minjufish</Text>
        </View>
        <View style={styles.friendContainer}>
          <Text style={styles.friendName}>친구</Text>
          <TouchableOpacity onPress={handleFriendPress}>
            <Text style={styles.friendNumber}>13</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={handleEditPress} style={styles.friendButton}>
        <Text style={styles.buttonText}>프로필 편집</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
