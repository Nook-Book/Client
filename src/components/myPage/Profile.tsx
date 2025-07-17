import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useMyPage } from "../../hooks/mypage/useMyPage";
import { styles } from "../../styles/myPage/Profile";
import { NavigationProp } from "../../types/search";

const Profile = ({ refetch: externalRefetch }: { refetch?: () => void }) => {
  const navigation = useNavigation<NavigationProp>();

  const { data, refetch } = useMyPage();
  const myInfo = data.information;

  useEffect(() => {
    if (externalRefetch) {
      externalRefetch();
    } else {
      refetch();
    }
  }, []);

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

        <TouchableOpacity
          style={styles.friendContainer}
          onPress={() => {
            navigation.navigate("FriendPage");
          }}
        >
          <Text style={styles.friendName}>친구</Text>
          <Text style={styles.friendNumber}>{myInfo.friendsNum}</Text>
        </TouchableOpacity>
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
