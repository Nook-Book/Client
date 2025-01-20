import { View, Text, FlatList } from "react-native";
import { styles } from "../../styles/library/EditBookCollectionPageStyle";
import EditHeader from "../../components/header/EditHeader";
import PlusIcon from "../../assets/images/icon/Plus.svg";
import MinusIcon from "../../assets/images/icon/Minus.svg";
import { useCallback, useState } from "react";
import MaxCollectionModal from "../../components/modal/MaxCollectionModal";
import CollectionItem from "../../components/libary/CollectionItem";
import EditModal from "../../components/modal/EditModal";
import { getList } from "../../api/collection/getList";
import { getCurrentList } from "../../api/collection/getCurrentList";
import {
  TCollectionListDetailRes,
  TCollectionOrderReq,
} from "../../types/library";
import { useFocusEffect } from "@react-navigation/native";
import { postOrder } from "../../api/collection/postOrder";

const EditBookCollectionPage = ({ navigation }: { navigation: any }) => {
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isMaxModalStatus, setIsMaxModalStatus] = useState(true);
  const [currentPrevId, setCurrentPrevId] = useState<number[]>([]); //현재 컬렉션 id (수정 전)
  const [currentId, setCurrentId] = useState<number[]>([]); //현재 컬렉션 id (수정 후)
  const [list, setList] = useState<TCollectionListDetailRes[]>([]); //전체 컬렉션 리스트

  const fetchCollectionList = async () => {
    try {
      const currentList = await getCurrentList();
      if (currentList?.check) {
        const currentIds =
          currentList.information.mainCollectionListDetailRes.map(
            (data) => data.collectionId
          );
        setCurrentPrevId(currentIds);
        setCurrentId(currentIds);
      }

      const list = await getList();
      if (list?.check) {
        setList(list.information.collectionListDetailRes);
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchCollectionList();
    }, [])
  );

  //현재컬렉션에서 제거하는 함수
  const handleRemoveItem = (itemId: number) => {
    if (currentId.length === 1) {
      setIsMaxModalStatus(false);
      setModalVisible(true);
    } else {
      setCurrentId((prev) => prev.filter((id) => id !== itemId));
    }
  };

  //현재 컬렉션에 추가하는 함수
  const handleAddItem = (itemId: number) => {
    if (currentId.length < 4) {
      setCurrentId((prev) =>
        prev.includes(itemId) ? prev : [...prev, itemId]
      );
    } else {
      setIsMaxModalStatus(true);
      setModalVisible(true);
    }
  };

  //컬렉션 저장 API
  const handleSaveCollection = async () => {
    try {
      const listId = list
        .filter((data) => !currentId.includes(data.collectionId))
        .map((data) => data.collectionId);

      let order = 1;
      const request: TCollectionOrderReq[] = [];

      currentId.forEach((id) => {
        request.push({
          collectionId: id,
          status: 1,
          order: order++,
        });
      });

      listId.forEach((id) => {
        request.push({
          collectionId: id,
          status: 0,
          order: order++,
        });
      });

      const response = await postOrder(request);
      if (response.check) {
        navigation.navigate("EditBook", { isTaskComplete: true });
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 50 }}></View>
      <EditHeader
        onCancel={() => {
          currentPrevId === currentId
            ? navigation.navigate("Library")
            : setEditModalVisible(!isEditModalVisible);
        }}
        onComplete={handleSaveCollection}
      />
      <View style={styles.innerContainer}>
        <View style={styles.titleWrap}>
          <Text style={styles.titleText}>현재 컬렉션</Text>
          <Text style={styles.numText}>전체 {currentId.length}개</Text>
        </View>
        <FlatList
          style={styles.collectionMinusWrap}
          data={list
            .filter((data) => currentId.includes(data.collectionId))
            .sort(
              (a, b) =>
                currentId.indexOf(a.collectionId) -
                currentId.indexOf(b.collectionId)
            )}
          renderItem={({ item, index }) => (
            <CollectionItem
              item={item}
              index={index}
              isPlusItem={false}
              onPress={() => handleRemoveItem(item.collectionId)}
              icon={MinusIcon}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.collectionList}>
          <View style={styles.titleWrap}>
            <Text style={styles.titleText}>전체 컬렉션</Text>
            <Text style={styles.numText}>
              전체 {list.length - currentId.length}개
            </Text>
          </View>
          <View>
            <FlatList
              data={list.filter(
                (data) => !currentId.includes(data.collectionId)
              )}
              renderItem={({ item, index }) => (
                <CollectionItem
                  item={item}
                  index={index}
                  isPlusItem={true}
                  onPress={() => handleAddItem(item.collectionId)}
                  icon={PlusIcon}
                />
              )}
              keyExtractor={(_, index) => index.toString()}
              numColumns={2}
              contentContainerStyle={styles.flatListContent}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
      <MaxCollectionModal
        visible={modalVisible}
        text={
          isMaxModalStatus
            ? "최대 지정 가능한 컬렉션 수는\n4개입니다."
            : "최소 지정 컬렉션 수는 1개입니다."
        }
        onClose={() => setModalVisible(false)}
      />
      <EditModal
        visible={isEditModalVisible}
        text={"변경된 편집 사항이 저장되지 않습니다.\n취소하시겠습니까?"}
        rightText="취소"
        onClose={() => setEditModalVisible(false)}
        onComplate={() => navigation.navigate("Library")}
      />
    </View>
  );
};

export default EditBookCollectionPage;
