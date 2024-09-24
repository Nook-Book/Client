import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Profile from "../../../assets/images/profile/FriendProfile.svg";
import { styles } from "../../../styles/myPage/friendPage/FriendComponent";
import { FriendComponentProps, FriendParamList } from "../../../types/friend";

const FriendComponent: React.FC<FriendComponentProps> = ({
  image,
  name,
  type,
  isRequestProp,
}) => {
  const [isRequest, setIsRequest] = useState<boolean>(isRequestProp!);
  const navigation = useNavigation<FriendParamList>();

  const handleCancleRequest = () => {
    setIsRequest(false);
  };
  const handleRequestFriend = () => {
    setIsRequest(true);
  };
  const handleClickComponent = () => {
    navigation.navigate("FriendSearchResultPage", { query: name });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleClickComponent}>
      <View style={styles.item}>
        <Profile />
        <Text style={styles.name}>{name}</Text>
      </View>
      {type === "RecieveFriend" && (
        <View style={styles.item}>
          <TouchableOpacity style={styles.okButton}>
            <Text style={styles.okText}>수락</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.refuseButton}>
            <Text style={styles.refuseText}>거절</Text>
          </TouchableOpacity>
        </View>
      )}
      {type === "SendFriend" && (
        <View style={styles.item}>
          {isRequest ? (
            <TouchableOpacity
              style={styles.requestButton}
              onPress={handleCancleRequest}
            >
              <Text style={styles.okText}>요청됨</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.okButton}
              onPress={handleRequestFriend}
            >
              <Text style={styles.okText}>친구 요청</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default FriendComponent;
