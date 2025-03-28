import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { usePostPending } from "../../../hooks/mypage/useFriend";
import { styles } from "../../../styles/myPage/friendPage/FriendComponent";
import { FriendComponentProps, FriendParamList } from "../../../types/friend";

const FriendComponent: React.FC<FriendComponentProps> = ({
  user,
  type,
  isRequestProp,
}) => {
  const [isRequest, setIsRequest] = useState<boolean>(isRequestProp!);
  const navigation = useNavigation<FriendParamList>();
  const { mutate: postPending } = usePostPending();

  const handleCancleRequest = () => {
    setIsRequest(false);
  };
  const handleRequestFriend = () => {
    setIsRequest(true);
    postPending(user.userId);
  };
  const handleClickComponent = () => {
    navigation.navigate("FriendSearchResultPage", { query: user.nickname });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClickComponent}>
      <View style={styles.item}>
        <Image
          source={{ uri: `${user.imageUrl}` }}
          style={{ width: 40, height: 40 }}
          resizeMode="cover"
        />
        <Text style={styles.name}>{user.nickname}</Text>
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
