import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/myPage/collectionPage/MyCollectionPageStyle";

// import MyPageAtherNav from "../../components/msyPage/MyPageAtherNav";
import { useGetCollection } from "../../hooks/mypage/useCollection";

import { useNavigation } from "@react-navigation/native";
import MinusIcon from "../../assets/images/icon/Minus.svg";
import BackTitleHeader from "../../components/header/BackTitleHeader";
import AddCollectionModal from "../../components/modal/AddCollectionModal";
import DeleteCollectionModal from "../../components/modal/DeleteCollectionModal";
import MyCollectionItem from "../../components/myPage/collection/MyCollectionItem";
import { TCollectionListDetailRes } from "../../types/library";
const MyCollectionPage = () => {
  // 컬렉션 데이터
  const { data: collections, refetch } = useGetCollection();
  const navigation = useNavigation();
  // 삭제 모드 상태
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  // 컬렉션 추가 모달 상태
  const [isShowAddModal, setIsShowAddModal] = useState(false);
  // 컬렉션 삭제 모달 상태
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  // 삭제할 컬렉션 ID
  const [collection, setCollection] = useState<TCollectionListDetailRes | null>(
    null
  );
  return (
    <View style={styles.container}>
      {isShowAddModal && (
        <AddCollectionModal
          onExit={() => setIsShowAddModal(false)}
          refetch={refetch}
        />
      )}
      {isShowDeleteModal && (
        <DeleteCollectionModal
          onExit={() => setIsShowDeleteModal(false)}
          refetch={refetch}
          collection={collection}
        />
      )}
      <BackTitleHeader
        title={"컬렉션 전체보기"}
        isTitleVisible={true}
        navigation={navigation}
      />
      <View style={styles.collectionNav}>
        <TouchableOpacity onPress={() => setIsShowAddModal(true)}>
          <Text style={styles.buttonText}>추가</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsDeleteMode(!isDeleteMode)}>
          <Text style={styles.buttonText}>
            {isDeleteMode ? "취소" : "삭제"}
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.collectionContainer}>
        <Text style={styles.label}>
          전체
          <Text style={styles.lobel_Bold}>
            {collections.information.totalCollections !== undefined
              ? collections.information.totalCollections
              : 0}
          </Text>
          개
        </Text>
        <View style={styles.collectionList}>
          {collections.information.collectionListDetailRes.map(
            (collection, index) => (
              <MyCollectionItem
                key={index}
                item={collection}
                isMinusItem={isDeleteMode}
                icon={MinusIcon}
                setCollection={setCollection}
                setIsShowDeleteModal={setIsShowDeleteModal}
              />
            )
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default MyCollectionPage;
