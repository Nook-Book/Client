import { View, Text, FlatList, Pressable } from "react-native";
import { styles } from "../../styles/write/ImageItemStyle";

type ImageItemType = {
  text: string;
  onPress: () => void;
};

const ImageItem = ({
  handleTextInsert,
}: {
  handleTextInsert: (type: string) => void;
}) => {
  const openAlbum = () => {};
  const openCamera = () => {};

  const ImageItem: ImageItemType[] = [
    {
      text: "사진 앨범",
      onPress: openAlbum,
    },
    {
      text: "카메라",
      onPress: openCamera,
    },
  ];

  const renderItem = ({ item }: { item: ImageItemType }) => {
    return (
      <Pressable
        style={[styles.boxWrap]}
        onPress={() => handleTextInsert("흠")}
      >
        <Text style={styles.itemText}>{item.text}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.itemWrap}>
      <FlatList
        data={ImageItem}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ImageItem;
