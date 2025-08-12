import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import ProfileImage from "../../assets/images/profile/ProfileImage.svg";
import {
  useDeletePendingRequest,
  usePostPending,
  usePutPending,
} from "../../hooks/mypage/useFriend";
import { styles } from "../../styles/myPage/AtherUserProfile";
import { NavigationProp } from "../../types/search";
import { GetUserInfoResponse } from "../../types/user/user";

const AtherUserProfile = ({
  userInfo,
  type,
  onClick,
  isRequest,
  friendId,
  userId,
  refetch,
}: {
  userInfo: GetUserInfoResponse;
  type: "Friend" | "RecieveFriend" | "SendFriend";
  isRequest: boolean;
  onClick: () => void;
  friendId?: number;
  userId?: number;
  refetch?: () => void;
}) => {
  const [isRequestState, setIsRequestState] = useState<boolean>(isRequest);
  const { mutate: postPending } = usePostPending();
  const { mutate: deletePendingRequest } = useDeletePendingRequest();
  const { mutate: putPending } = usePutPending();

  console.log("user", userInfo);

  const handleCancleRequest = () => {
    if (!friendId) {
      console.error("friendId가 없어서 친구 요청을 취소할 수 없습니다.");
      return;
    }

    deletePendingRequest(friendId, {
      onSuccess: () => {
        setIsRequestState(false);
        refetch?.();
      },
      onError: (error) => {
        console.error("친구 요청 취소 실패:", error);
      },
    });
  };

  const handleRequestFriend = () => {
    if (!userId) {
      console.error("userId가 없어서 친구 요청을 보낼 수 없습니다.");
      return;
    }

    postPending(userId, {
      onSuccess: () => {
        setIsRequestState(true);
        refetch?.();
      },
      onError: (error) => {
        console.error("친구 요청 실패:", error);
      },
    });
  };

  const handleAcceptRequest = () => {
    if (!userId) {
      console.error("userId가 없어서 친구 요청을 수락할 수 없습니다.");
      return;
    }

    putPending(
      { userId: userId, isAccept: true },
      {
        onSuccess: () => {
          refetch?.();
        },
        onError: (error) => {
          console.error("친구 요청 수락 실패:", error);
        },
      }
    );
  };

  const handleRefuseRequest = () => {
    if (!userId) {
      console.error("userId가 없어서 친구 요청을 거절할 수 없습니다.");
      return;
    }

    putPending(
      { userId: userId, isAccept: false },
      {
        onSuccess: () => {
          refetch?.();
        },
        onError: (error) => {
          console.error("친구 요청 거절 실패:", error);
        },
      }
    );
  };

  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.profileBox}>
        {userInfo?.information ? (
          <>
            <Image
              source={{ uri: userInfo.information.imageUrl }}
              style={styles.profileImage}
            />
            <View style={styles.profileContainer}>
              <Text style={styles.name}>{userInfo.information.nickname}</Text>
              <Text style={styles.email}>
                @{userInfo.information.nicknameId}
              </Text>
              <View style={styles.friendContainer}>
                <Text style={styles.friendName}>친구</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("FriendPage");
                  }}
                >
                  <Text style={styles.friendNumber}>
                    {userInfo.information.friendsNum}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <>
            <ProfileImage style={styles.profileImage} />
            <View style={styles.profileContainer}>
              <Text style={styles.name}>사용자</Text>
              <Text style={styles.email}>@unknown</Text>
              <View style={styles.friendContainer}>
                <Text style={styles.friendName}>친구</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("FriendPage");
                  }}
                >
                  <Text style={styles.friendNumber}>0</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View>
      {/* 친구 수락, 거절 or 친구 요청 각 타입별로 구분 */}
      <View style={styles.buttonContainer}>
        {type === "SendFriend" && (
          <>
            {isRequestState ? (
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
        {type === "RecieveFriend" && (
          <>
            <TouchableOpacity
              style={styles.okButton}
              onPress={handleAcceptRequest}
            >
              <Text style={styles.okButtonText}>수락</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.refuseButton}
              onPress={handleRefuseRequest}
            >
              <Text style={styles.refuseButtonText}>거절</Text>
            </TouchableOpacity>
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
