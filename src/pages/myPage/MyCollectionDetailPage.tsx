import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import DeleteCollectionButtonIcon from "../../assets/images/icon/DeleteCollectionButtonIcon.svg";
import MoveCollectionButtonIcon from "../../assets/images/icon/MoveCollectionButtonIcon.svg";
import CollectionBottomSheet from "../../components/bottomSheet/CollectionBottomSheet";
import BackTextHeader from "../../components/header/BackTextHeader";
import EditHeader from "../../components/header/EditHeader";
import DeleteModal from "../../components/modal/DeleteModal";
import MyCollectionDetailItem from "../../components/myPage/collection/MyCollectionDetailItem";
import {
  useDeleteBook,
  usePatchBook,
} from "../../hooks/collection/useCollections";
import { useGetCollectionDetail } from "../../hooks/mypage/useCollection";
import { styles } from "../../styles/myPage/collectionPage/MyCollectionDetailPageStyle";
import { MyCollectionDetailRouteProp } from "../../types/navigation/navigation";

const MyCollectionDetailPage = ({
  route,
}: {
  route: MyCollectionDetailRouteProp;
}) => {
  // 편집 모드 여부
  const [isEditMode, setIsEditMode] = useState(false);
  // 선택된 도서
  const [selectedBooks, setSelectedBooks] = useState<number[]>([]);
  // 선택된 컬렉션
  const [selectedCollection, setSelectedCollection] = useState<number>();
  // 컬렉션 이동 모달 여부
  const [isMoveCollectionModalVisible, setIsMoveCollectionModalVisible] =
    useState(false);
  // 컬렉션 삭제 모달 여부
  const [isDeleteCollectionModalVisible, setIsDeleteCollectionModalVisible] =
    useState(false);

  const { collectionId, collectionTitle } = route.params;
  const { data: collectionDetail, refetch } =
    useGetCollectionDetail(collectionId);
  const collectionBookCount =
    collectionDetail?.information.collectionBooksListDetailRes.length;
  const { mutate: deleteBook } = useDeleteBook();
  const { mutate: patchBook } = usePatchBook();

  // 편집 모드 토글
  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  // 도서 선택
  const handleSelectBook = (bookId: number) => {
    if (selectedBooks.includes(bookId)) {
      setSelectedBooks(selectedBooks.filter((b) => b !== bookId));
    } else {
      setSelectedBooks([...selectedBooks, bookId]);
    }
  };

  // 컬렉션 도서 삭제
  const handleDeleteCollection = () => {
    deleteBook(
      { collectionId, bookIds: selectedBooks },
      {
        onSuccess: () => {
          setIsDeleteCollectionModalVisible(false);
          refetch();
          setSelectedBooks([]);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  // 컬렉션 이동
  const handleSaveCollectionPress = () => {
    console.log(selectedBooks);
    // patchBook(
    //   {
    //     collectionId,
    //     bookId: selectedBooks[0],
    //     targetCollectionId: selectedCollection,
    //   },
    //   {
    //     onSuccess: () => {
    //       setIsMoveCollectionModalVisible(false);
    //       setSelectedCollection(undefined);
    //       refetch();
    //       console.log("컬렉션 이동 성공");
    //     },
    //     onError: (error) => {
    //       console.log(error);
    //     },
    //   }
    // );
  };

  return (
    <View style={styles.container}>
      {isEditMode ? (
        <EditHeader
          text="컬렉션 편집"
          isTextVisible={true}
          onCancel={() => setIsEditMode(false)}
          onComplete={() => setIsEditMode(false)}
        />
      ) : (
        <BackTextHeader title={collectionTitle} />
      )}
      <View style={styles.headerContainer}>
        <View style={styles.bookCountContainer}>
          {isEditMode ? (
            <Text style={styles.headerText}>
              {selectedBooks.length}/{collectionBookCount}
            </Text>
          ) : (
            <Text style={styles.headerText}>{collectionBookCount}</Text>
          )}
          <Text style={styles.bookCountText}>권</Text>
        </View>
        {!isEditMode && (
          <TouchableOpacity onPress={handleEditMode}>
            <Text style={styles.headerText}>편집</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.collectionDetailContainer}>
        <FlatList
          data={collectionDetail?.information.collectionBooksListDetailRes}
          renderItem={({ item }) => (
            <MyCollectionDetailItem
              item={item}
              isEditMode={isEditMode}
              isSelected={selectedBooks.includes(item.bookId)}
              onSelectBook={() => handleSelectBook(item.bookId)}
            />
          )}
          keyExtractor={(item) => item.bookId.toString()}
          numColumns={3}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
        />
      </View>
      {isEditMode && (
        <View style={styles.editModeContainer}>
          <TouchableOpacity
            style={styles.moveCollectionButton}
            onPress={() => setIsMoveCollectionModalVisible(true)}
          >
            <MoveCollectionButtonIcon />
            <Text style={styles.moveCollectionButtonText}>컬렉션 이동</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteCollectionButton}
            onPress={() => setIsDeleteCollectionModalVisible(true)}
          >
            <DeleteCollectionButtonIcon />
            <Text style={styles.deleteCollectionButtonText}>삭제</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* 컬렉션 삭제 모달 */}
      <DeleteModal
        visible={isDeleteCollectionModalVisible}
        leftText="삭제"
        text={`선택한 도서를 컬렉션에서\n삭제하시겠습니까?`}
        onClose={() => setIsDeleteCollectionModalVisible(false)}
        onComplate={handleDeleteCollection}
      />

      {/* 컬렉션 이동 모달 */}
      {isMoveCollectionModalVisible && (
        <CollectionBottomSheet
          onClose={() => {
            setIsMoveCollectionModalVisible(false);
            setSelectedCollection(undefined);
          }}
          clickList={selectedCollection ? [selectedCollection] : []}
          onComplete={() => handleSaveCollectionPress()}
          onPress={(id) => setSelectedCollection(id)}
        />
      )}
    </View>
  );
};

export default MyCollectionDetailPage;
