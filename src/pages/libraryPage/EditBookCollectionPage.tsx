import { View, Text, FlatList } from "react-native";
import { styles } from "../../styles/library/EditBookCollectionPageStyle";
import EditHeader from "../../components/header/EditHeader";
import PlusIcon from "../../assets/images/icon/Plus.svg";
import MinusIcon from "../../assets/images/icon/Minus.svg";
import {
  dummyList,
  dummyListAll,
} from "../../assets/data/dummyBookCarouseList";
import { TBookCategory } from "../../types/book";
import { useState } from "react";
import MaxCollectionModal from "../../components/modal/MaxCollectionModal";
import CollectionItem from "../../components/libary/CollectionItem";
import EditModal from "../../components/modal/EditModal";

const EditBookCollectionPage = ({ navigation }: { navigation: any }) => {
  const [collection, setCollection] = useState<TBookCategory[]>(dummyList);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isMaxModalStatus, setIsMaxModalStatus] = useState(true);

  const handleRemoveItem = (itemId: number) => {
    if (collection.length === 1) {
      setIsMaxModalStatus(false);
      setModalVisible(true);
    } else {
      setCollection((prevCollection) =>
        prevCollection.filter((item) => item.id !== itemId)
      );
    }
  };

  const handleAddItem = (itemId: number) => {
    if (collection.length < 4) {
      const itemToAdd = dummyListAll.find((item) => item.id === itemId);
      if (itemToAdd && !collection.some((item) => item.id === itemId)) {
        setCollection((prevCollection) => [...prevCollection, itemToAdd]);
      }
    } else {
      setIsMaxModalStatus(true);
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <EditHeader
        navigation={navigation}
        onComplete={() => setEditModalVisible(!isEditModalVisible)}
      />
      <View>
        <View style={styles.titleWrap}>
          <Text style={styles.titleText}>현재 컬렉션</Text>
          <Text style={styles.numText}>전체 {collection.length}개</Text>
        </View>
        <FlatList
          style={styles.collectionMinusWrap}
          data={collection}
          renderItem={({ item, index }) => (
            <CollectionItem
              item={item}
              index={index}
              isPlusItem={false}
              onPress={() => handleRemoveItem(item.id)}
              icon={MinusIcon}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.collectionList}>
          <View style={styles.titleWrap}>
            <Text style={styles.titleText}>전체 컬렉션</Text>
            <Text style={styles.numText}>전체 {dummyListAll.length}개</Text>
          </View>
          <View style={styles.collectionPlusWrap}>
            <FlatList
              data={dummyListAll}
              renderItem={({ item, index }) => (
                <CollectionItem
                  item={item}
                  index={index}
                  isPlusItem={true}
                  onPress={() => handleAddItem(item.id)}
                  icon={PlusIcon}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
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
        onClose={() => setModalVisible(false)}
        onComplate={() => navigation.navigate("Library")}
      />
    </View>
  );
};

export default EditBookCollectionPage;
