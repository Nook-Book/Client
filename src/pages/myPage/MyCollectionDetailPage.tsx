import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DeleteCollectionButtonIcon from "../../assets/images/icon/DeleteCollectionButtonIcon.svg";
import MoveCollectionButtonIcon from "../../assets/images/icon/MoveCollectionButtonIcon.svg";
import BackTextHeader from "../../components/header/BackTextHeader";
import EditHeader from "../../components/header/EditHeader";
import MyCollectionDetailItem from "../../components/myPage/collection/MyCollectionDetailItem";
import { useGetCollectionDetail } from "../../hooks/mypage/useCollection";
import { Color, Font } from "../../styles/Theme";
import { MyCollectionBookDetail } from "../../types/mypage/collection";
import { MyCollectionDetailRouteProp } from "../../types/navigation/navigation";
const MyCollectionDetailPage = ({
  route,
}: {
  route: MyCollectionDetailRouteProp;
}) => {
  // 편집 모드 여부
  const [isEditMode, setIsEditMode] = useState(false);
  // 선택된 도서
  const [selectedBooks, setSelectedBooks] = useState<MyCollectionBookDetail[]>(
    []
  );

  const { collectionId, collectionTitle } = route.params;
  const { data: collectionDetail } = useGetCollectionDetail(collectionId);
  const collectionBookCount =
    collectionDetail?.information.collectionBooksListDetailRes.length;

  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleComplete = () => {};

  const handleSelectBook = (book: MyCollectionBookDetail) => {
    if (selectedBooks.includes(book)) {
      setSelectedBooks(selectedBooks.filter((b) => b !== book));
    } else {
      setSelectedBooks([...selectedBooks, book]);
    }
  };

  return (
    <View style={styles.container}>
      {isEditMode ? (
        <EditHeader
          text="컬렉션 편집"
          isTextVisible={true}
          onCancel={() => setIsEditMode(false)}
          onComplete={handleComplete}
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
              isSelected={selectedBooks.includes(item)}
              onSelectBook={handleSelectBook}
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
          <TouchableOpacity style={styles.moveCollectionButton}>
            <MoveCollectionButtonIcon />
            <Text style={styles.moveCollectionButtonText}>컬렉션 이동</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteCollectionButton}>
            <DeleteCollectionButtonIcon />
            <Text style={styles.deleteCollectionButtonText}>삭제</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
    flexDirection: "column",
    height: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  bookCountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
  },
  editActiveText: {
    color: Color.Contents.Click,
  },
  bookCountText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Secondary,
  },
  collectionDetailContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    gap: 16,
    flex: 1,
    justifyContent: "space-between",
  },
  list: {
    paddingTop: 16,
  },
  row: {
    marginBottom: 12,
    gap: 18,
  },
  editModeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Color.Contents.Click,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  moveCollectionButton: {
    backgroundColor: Color.Contents.Click,
    padding: 16,
    borderRadius: 16,
    width: "50%",
    alignItems: "center",
  },
  deleteCollectionButton: {
    backgroundColor: Color.Contents.Click,
    padding: 16,
    borderRadius: 16,
    width: "50%",
    alignItems: "center",
  },
  moveCollectionButtonText: {
    ...Font.Paragraph.Small,
    color: "white",
  },
  deleteCollectionButtonText: {
    ...Font.Paragraph.Small,
    color: "white",
  },
});

export default MyCollectionDetailPage;
