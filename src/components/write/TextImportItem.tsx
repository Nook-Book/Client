import { View, Text, FlatList, Pressable } from "react-native";
import { styles } from "../../styles/write/ImageItemStyle";

type TextImportItemType = {
  text: string;
  onPress: () => void;
};

const TextImportItem = ({
  handleTextInsert,
}: {
  handleTextInsert: (type: string) => void;
}) => {
  const openCamera = () => {};
  const openAlbum = () => {};

  const TextImportItem: TextImportItemType[] = [
    {
      text: "카메라로 텍스트 추출",
      onPress: openCamera,
    },
    {
      text: "사진첩에서 텍스트 추출",
      onPress: openAlbum,
    },
  ];

  const renderItem = ({ item }: { item: TextImportItemType }) => {
    return (
      <Pressable style={[styles.boxWrap]} onPress={item.onPress}>
        <Text style={styles.itemText}>{item.text}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.itemWrap}>
      <FlatList
        data={TextImportItem}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TextImportItem;
