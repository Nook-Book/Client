import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { getUserInfo } from "../../api/user/getUser";
import CalendarIcon from "../../assets/images/icon/CalenderIcon.svg";
import CollectionIcon from "../../assets/images/icon/Colletion.svg";
import BackTextHeader from "../../components/header/BackTextHeader";
import AtherUserProfile from "../../components/myPage/AtherUserProfile";
import Bookstatistics from "../../components/myPage/Bookstatistics";
import CategoryReport from "../../components/myPage/CategoryReport";
import FriendDeleteModal from "../../components/myPage/friendPage/FriendDeleteModal";
import { styles } from "../../styles/myPage/friendPage/FriendSearchResultPage";
import { SearchFriendResultRouteProp } from "../../types/navigation/navigation";

const FriendSearchResultPage = ({
  route,
  navigation,
}: {
  route: SearchFriendResultRouteProp;
  navigation: any;
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();
  
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  
  const { nickname, userId, friendId, type, isRequest } = route.params;
  const { data: userInfo, refetch } = useQuery({
    queryKey: ["userInfo", userId],
    queryFn: () => getUserInfo(userId),
  });

  // 친구 삭제 후 처리 함수
  const handleFriendDeleteSuccess = () => {
    console.log("친구 삭제 성공 - 쿼리 무효화 및 페이지 이동");
    // 친구 목록 관련 쿼리 무효화
    queryClient.invalidateQueries({ queryKey: ["GetFriend"] });
    queryClient.invalidateQueries({ queryKey: ["GetPendingFriend"] });
    queryClient.invalidateQueries({ queryKey: ["userInfo", userId] });
    
    // 이전 페이지로 이동 (모달은 onExit에서 닫힘)
    setTimeout(() => {
      navigation.goBack();
    }, 100); // 모달이 닫힌 후 페이지 이동
  };

  return (
    <View style={styles.container}>
      {isModalOpen && (
        <>
          <View style={styles.overlay} />
          <FriendDeleteModal
            title={nickname}
            friendId={friendId}
            onExit={() => setIsModalOpen(false)}
            refetch={handleFriendDeleteSuccess}
          />
        </>
      )}
      <ScrollView>
        <BackTextHeader title={""} />
        <AtherUserProfile
          userInfo={userInfo!}
          type={type}
          onClick={handleOpenModal}
          isRequest={isRequest}
          friendId={friendId}
          userId={userId}
          refetch={() => {
            refetch();
            queryClient.invalidateQueries({ queryKey: ["GetFriend"] });
            queryClient.invalidateQueries({ queryKey: ["GetPendingFriend"] });
          }}
        />
        <View style={styles.readingActivityContainer}>
          <View style={styles.HeaderContainer}>
            <Text style={styles.activityHeader}>독서활동</Text>
          </View>
          <View style={styles.linkIconContainer}>
            <TouchableOpacity style={styles.linkIconContainerComponent}>
              <CollectionIcon />
              <Text style={styles.linkIconContainerComponentText}>
                컬렉션 전체 보기
              </Text>
            </TouchableOpacity>
            <View style={styles.linkIconBorder} />
            <TouchableOpacity
              style={styles.linkIconContainerComponent}
              onPress={() =>
                navigation.navigate("MyReportPage", {
                  userId,
                })
              }
            >
              <CollectionIcon />
              <Text style={styles.linkIconContainerComponentText}>
                기록 전체 보기
              </Text>
            </TouchableOpacity>
            <View style={styles.linkIconBorder} />
            <TouchableOpacity
              style={styles.linkIconContainerComponent}
              onPress={() =>
                navigation.navigate("StatusCardDetail", {
                  clickStatus: {
                    userId,
                    nickname,
                  },
                  isCurrentUser: false,
                })
              }
            >
              <CalendarIcon />
              <Text style={styles.linkIconContainerComponentText}>
                독서 캘린더
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.linkActivityContainer}>
          <View style={styles.HeaderContainer}>
            <Text style={styles.activityHeader}>독서 리포트</Text>
          </View>
          <View style={styles.HeaderContainer}>
            <Text style={styles.categoryHeader}>많이 읽은 카테고리</Text>
          </View>
          <CategoryReport />
          <View style={styles.HeaderContainer}>
            <Text style={styles.categoryHeader}>독서 통계</Text>
          </View>
          <Bookstatistics />
        </View>
      </ScrollView>
    </View>
  );
};

export default FriendSearchResultPage;
