import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { getStyles } from "../../../styles/myPage/collectionPage/MyCollectionItemStyle";
import { Color } from "../../../styles/Theme";
import { TCollectionListDetailRes } from "../../../types/library";

const MyCollectionItem = ({
  item,
  isMinusItem,
  icon: IconComponent,
  setCollection,
  setIsShowDeleteModal,
}: {
  item: TCollectionListDetailRes;
  isMinusItem: boolean;
  icon: React.ElementType;
  setCollection: (collection: TCollectionListDetailRes) => void;
  setIsShowDeleteModal: (isShow: boolean) => void;
}) => {
  const { width: windowWidth } = useWindowDimensions();
  const styles = getStyles(windowWidth);

  // 컬렉션 삭제 핸들러
  const handleDeleteCollection = () => {
    if (isMinusItem) {
      setCollection(item);
      setIsShowDeleteModal(true);
    }
  };

  return (
    <View style={styles.collectionMinusItem}>
      <TouchableOpacity
        style={styles.collectionImages}
        onPress={handleDeleteCollection}
        activeOpacity={1}
      >
        {isMinusItem && (
          <>
            <View style={styles.collectionCover} />
            <IconComponent
              style={styles.icon}
              color={Color.Secondary}
              width={69.13}
              height={69.13}
            />
          </>
        )}
        <View style={styles.imageGrid}>
          {Array.from({ length: 4 }).map((_, idx) => {
            const data = item.collectionBooksCoverList[idx];
            return data ? (
              <Image
                key={idx}
                source={{ uri: data }}
                style={styles.collectionMinusImage}
              />
            ) : (
              <View key={idx} style={styles.collectionPlusImage} />
            );
          })}
        </View>
      </TouchableOpacity>
      <View style={styles.textWrap}>
        <Text style={styles.collectionTitleText}>{item.collectionTitle}</Text>
        <Text style={styles.collectionNumText}>{item.totalBooks}권</Text>
      </View>
    </View>
  );
};

export default MyCollectionItem;
