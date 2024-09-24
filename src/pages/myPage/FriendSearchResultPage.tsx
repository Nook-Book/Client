import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import CollectionIcon from "../../assets/images/icon/Colletion.svg";
import AtherUserProfile from "../../components/myPage/AtherUserProfile";
import Bookstatistics from "../../components/myPage/Bookstatistics";
import CategoryReport from "../../components/myPage/CategoryReport";
import FriendDeleteModal from "../../components/myPage/friendPage/FriendDeleteModal";
import MyPageAtherNav from "../../components/myPage/MyPageAtherNav";
import { styles } from "../../styles/myPage/friendPage/FriendSearchResultPage";
import { SearchFriendResultRouteProp } from "../../types/navigation/navigation";

const FriendSearchResultPage = ({
  route,
}: {
  route: SearchFriendResultRouteProp;
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const { query } = route.params; // query

  return (
    <View style={styles.container}>
      {isModalOpen && (
        <>
          <View style={styles.overlay} />
          <FriendDeleteModal
            title={query}
            onExit={() => setIsModalOpen(false)}
          />
        </>
      )}
      <ScrollView>
        <MyPageAtherNav title={""} />
        <AtherUserProfile
          name={query}
          type={"Friend"}
          onClick={handleOpenModal}
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
            <TouchableOpacity style={styles.linkIconContainerComponent}>
              <CollectionIcon />
              <Text style={styles.linkIconContainerComponentText}>
                기록 전체 보기
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
