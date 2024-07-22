import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { styles } from "./EditBookCollectionPageStyle";
import EditHeader from "../../components/header/EditHeader";
import PlusIcon from "../../assets/images/icon/Plus.svg";
import MinusIcon from "../../assets/images/icon/Minus.svg";
import { Color } from "../../styles/Theme";
import {
  dummyList,
  dummyListAll,
} from "../../assets/data/dummyBookCarouseList";
import { TBookCategory } from "../../types/book";
import { useState } from "react";
import MaxCollectionModal from "../../components/modal/MaxCollectionModal";

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

  const CollectionMinusItem = ({
    item,
    index,
  }: {
    item: TBookCategory;
    index: number;
  }) => {
    return (
      <View style={styles.collectionItem} key={index}>
        <TouchableOpacity
          style={styles.collectionImages}
          onPress={() => handleRemoveItem(item.id)}
          activeOpacity={1}
        >
          <View style={styles.collectionCover} />
          <MinusIcon
            style={styles.minusIcon}
            color={Color.Secondary}
            width={69.13}
            height={69.13}
          />
          <View style={styles.imageGrid}>
            {Array.from({ length: 4 }).map((_, idx) => {
              const data = item.dummyBook[idx];
              return data ? (
                <Image
                  key={idx}
                  source={data.image}
                  style={styles.collectionImage}
                />
              ) : (
                <View key={idx} style={styles.collectionImage} />
              );
            })}
          </View>
        </TouchableOpacity>
        <View style={styles.textWrap}>
          <Text style={styles.collectionTitleText}>{item.title}</Text>
          <Text style={styles.collectionNumText}>
            {item.dummyBook.length}권
          </Text>
        </View>
      </View>
    );
  };

  const CollectionPlusItem = ({
    item,
    index,
  }: {
    item: TBookCategory;
    index: number;
  }) => {
    return (
      <View style={styles.collectionPlusItem} key={index}>
        <TouchableOpacity
          style={styles.collectionImages}
          onPress={() => handleAddItem(item.id)}
          activeOpacity={1}
        >
          <View style={styles.collectionCover} />
          <PlusIcon
            style={styles.minusIcon}
            color={Color.Secondary}
            width={69.13}
            height={69.13}
          />
          <View style={styles.imageGrid}>
            {Array.from({ length: 4 }).map((_, idx) => {
              const data = item.dummyBook[idx];
              return data ? (
                <Image
                  key={idx}
                  source={data.image}
                  style={styles.collectionPlusImage}
                />
              ) : (
                <View key={idx} style={styles.collectionPlusImage} />
              );
            })}
          </View>
        </TouchableOpacity>
        <View style={styles.textWrap}>
          <Text style={styles.collectionTitleText}>{item.title}</Text>
          <Text style={styles.collectionNumText}>
            {item.dummyBook.length}권
          </Text>
        </View>
      </View>
    );
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
          style={styles.collectionWrap}
          data={collection}
          renderItem={({ item, index }) => (
            <CollectionMinusItem item={item} index={index} />
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
                <CollectionPlusItem item={item} index={index} />
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
