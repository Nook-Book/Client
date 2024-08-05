import { View, Text, FlatList, Pressable, Alert } from "react-native";
import { styles } from "../../styles/write/ImageItemStyle";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { Camera } from "expo-camera";

type ImageItemType = {
  text: string;
  onPress: () => void;
};

const ImageItem = ({
  handleTextInsert,
}: {
  handleTextInsert: (type: string) => void;
}) => {
  const [hasCameraPermission, setHasCameraPermission] = useState<
    boolean | null
  >(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState<
    boolean | null
  >(null);

  //카메라, 앨범 권한 요청
  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
      const { status: mediaLibraryStatus } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasCameraPermission(cameraStatus === "granted");
      setHasMediaLibraryPermission(mediaLibraryStatus === "granted");
    })();
  }, []);

  //앨범에서 이미지 선택
  const openAlbum = async () => {
    if (!hasMediaLibraryPermission) {
      Alert.alert("권한 오류", "미디어 라이브러리 접근 권한이 필요합니다.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      const markdownImageSyntax = `![Image](${imageUri})`;
      handleTextInsert(markdownImageSyntax);
    }
  };

  //카메라 실행
  const openCamera = async () => {
    if (!hasCameraPermission) {
      Alert.alert("권한 오류", "카메라 접근 권한이 필요합니다.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      const markdownImageSyntax = `![Image](${imageUri})`;
      handleTextInsert(markdownImageSyntax);
    }
  };

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
      <Pressable style={[styles.boxWrap]} onPress={item.onPress}>
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
