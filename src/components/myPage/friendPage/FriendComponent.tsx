import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  useDeletePendingRequest,
  usePostPending,
  usePutPending,
} from "../../../hooks/mypage/useFriend";
import { styles } from "../../../styles/myPage/friendPage/FriendComponent";
import { FriendComponentProps, FriendParamList } from "../../../types/friend";

const FriendComponent: React.FC<FriendComponentProps> = ({
  user,
  type,
  isRequestProp,
  refetch,
  isSwipeableOpen,
}) => {
  const [isRequest, setIsRequest] = useState<boolean>(isRequestProp!);
  const navigation = useNavigation<FriendParamList>();
  const { mutate: postPending } = usePostPending();
  const { mutate: putPending } = usePutPending();
  const { mutate: deletePendingRequest } = useDeletePendingRequest();

  const handleCancleRequest = () => {
    if (!user.friendId) {
      console.error("friendId가 없어서 친구 요청을 취소할 수 없습니다.");
      return;
    }

    // API를 통해 친구 요청 취소
    deletePendingRequest(user.friendId, {
      onSuccess: () => {
        setIsRequest(false);
        // 보낸 요청 리스트를 새로고침하여 UI에서 해당 친구를 제거
        refetch();
      },
      onError: (error) => {
        console.error("친구 요청 취소 실패:", error);
      },
    });
  };
  const handleRequestFriend = () => {
    postPending(user.userId, {
      onSuccess: () => {
        setIsRequest(true);
        refetch();
      },
      onError: (error) => {
        console.error("친구 요청 실패:", error);
      },
    });
  };
  const handleClickComponent = () => {
    navigation.navigate("FriendSearchResultPage", {
      nickname: user.nickname,
      userId: user.userId,
      friendId: user.friendId,
      type: type,
      isRequest: isRequest,
    });
  };

  // 친구 요청 수락/거절
  const handleAcceptRequest = () => {
    putPending(
      { friendId: user.friendId?.toString()!, isAccept: true },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };
  const handleRefuseRequest = () => {
    putPending(
      { friendId: user.friendId?.toString()!, isAccept: false },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (!isSwipeableOpen) {
          handleClickComponent();
        }
      }}
    >
      <View style={styles.item}>
        {user?.imageUrl ? (
          <Image
            source={{ uri: `${user.imageUrl}` }}
            style={styles.profileImage}
            resizeMode="cover"
          />
        ) : (
          <Image
            source={require("../../../assets/images/profile/ProfileImage.svg")}
            style={styles.profileImage}
            resizeMode="cover"
          />
        )}
        <Text style={styles.name}>{user?.nickname}</Text>
      </View>
      {type === "RecieveFriend" && (
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.okButton}
            onPress={handleAcceptRequest}
          >
            <Text style={styles.okText}>수락</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.refuseButton}
            onPress={handleRefuseRequest}
          >
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
