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
  isPlusItem,
  onPress,
  icon: IconComponent,
}: {
  item: TCollectionListDetailRes;
  isPlusItem: boolean;
  onPress: () => void;
  icon: React.ElementType;
}) => {
  const { width: windowWidth } = useWindowDimensions();
  const styles = getStyles(windowWidth);

  return (
    <View
      style={
        isPlusItem ? styles.collectionPlusItem : styles.collectionMinusItem
      }
    >
      <TouchableOpacity
        style={styles.collectionImages}
        onPress={onPress}
        activeOpacity={1}
      >
        <View style={styles.collectionCover} />
        <IconComponent
          style={styles.icon}
          color={Color.Secondary}
          width={69.13}
          height={69.13}
        />
        <View style={styles.imageGrid}>
          {Array.from({ length: 4 }).map((_, idx) => {
            const data = item.collectionBooksCoverList[idx];
            return data ? (
              <Image
                key={idx}
                source={{ uri: data }}
                style={
                  isPlusItem
                    ? styles.collectionPlusImage
                    : styles.collectionMinusImage
                }
              />
            ) : (
              <View
                key={idx}
                style={
                  isPlusItem
                    ? styles.collectionPlusImage
                    : styles.collectionMinusImage
                }
              />
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
