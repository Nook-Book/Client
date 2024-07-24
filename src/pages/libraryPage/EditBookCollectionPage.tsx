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

const EditBookCollectionPage = ({ navigation }: { navigation: any }) => {
  const [collection, setCollection] = useState<TBookCategory[]>(dummyList);
  const [modalVisible, setModalVisible] = useState(false);

  const handleRemoveItem = (itemId: number) => {
    setCollection((prevCollection) =>
      prevCollection.filter((item) => item.id !== itemId)
    );
  };

  const handleAddItem = (itemId: number) => {
    if (collection.length < 4) {
      const itemToAdd = dummyListAll.find((item) => item.id === itemId);
      if (itemToAdd && !collection.some((item) => item.id === itemId)) {
        setCollection((prevCollection) => [...prevCollection, itemToAdd]);
      }
    } else {
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <EditHeader
        navigation={navigation}
        onComplete={() => navigation.navigate("Library")}
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
      {modalVisible && (
        <MaxCollectionModal
          text={"최대 지정 가능한 컬렉션 수는\n4개입니다."}
          onClose={() => setModalVisible(false)}
        />
      )}
    </View>
  );
};

export default EditBookCollectionPage;
