import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import ProfileImage from "../../assets/images/profile/ProfileImage.svg";
import { styles } from "../../styles/myPage/AtherUserProfile";
import { NavigationProp } from "../../types/search";

const AtherUserProfile = ({
  name,
  type,
  onClick,
}: {
  name: string;
  type: "AtherUser" | "RequestUser" | "Friend";
  onClick: () => void;
}) => {
  const [isRequest, setIsRequest] = useState<boolean>(false);

  const handleCancleRequest = () => {
    setIsRequest(false);
  };
  const handleRequestFriend = () => {
    setIsRequest(true);
  };

  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.profileBox}>
        <ProfileImage style={styles.profileImage} />
        <View style={styles.profileContainer}>
          <Text style={styles.name}>{name}</Text>
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
      </View>
      {/* 친구 수락, 거절 or 친구 요청 각 타입별로 구분 */}
      <View style={styles.buttonContainer}>
        {type === "AtherUser" && (
          <>
            <TouchableOpacity style={styles.okButton}>
              <Text style={styles.okButtonText}>수락</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.refuseButton}>
              <Text style={styles.refuseButtonText}>거절</Text>
            </TouchableOpacity>
          </>
        )}
        {type === "RequestUser" && (
          <>
            {isRequest ? (
              <TouchableOpacity
                style={styles.requestButton}
                onPress={handleCancleRequest}
              >
                <Text style={styles.okButtonText}>요청됨</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.requestedButton}
                onPress={handleRequestFriend}
              >
                <Text style={styles.okButtonText}>친구 요청</Text>
              </TouchableOpacity>
            )}
          </>
        )}
        {type === "Friend" && (
          <>
            <TouchableOpacity style={styles.friendButton} onPress={onClick}>
              <Text style={styles.okButtonText}>친구</Text>
              <BackIcon style={{ transform: [{ rotate: "-90deg" }] }} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default AtherUserProfile;
