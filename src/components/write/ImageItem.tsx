import { View, Text, FlatList, Pressable, Alert } from "react-native";
import { styles } from "../../styles/write/ImageItemStyle";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { postImage } from "../../api/note/postImage";

type ImageItemsType = {
  text: string;
  onPress: () => void;
};

const ImageItem = ({
  handleTextInsert,
  setAddImageList,
}: {
  handleTextInsert: (type: string) => void;
  setAddImageList: React.Dispatch<React.SetStateAction<string[]>>;
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
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      const fileUri = result.assets[0].uri;
      await uploadImage(fileUri);
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
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      const fileUri = result.assets[0].uri;
      await uploadImage(fileUri);
    }
  };

  //이미지 업로드 함수
  const uploadImage = async (uri: string) => {
    try {
      const fileName = uri.split("/").pop() || "image.jpg";
      const type = `image/${fileName.split(".").pop()}` || "image/jpeg";

      const formData = new FormData();
      formData.append("image", {
        uri,
        name: fileName,
        type,
      } as unknown as Blob);

      const response = await postImage(formData);
      if (response.check) {
        const markdownImageSyntax = `![Image](${response.information.imageUrl})\n\n`;
        handleTextInsert(markdownImageSyntax);
        setAddImageList((prev) => [...prev, response.information.imageUrl]);
      }
    } catch (error) {
      console.error("이미지 업로드 실패:", error);
      Alert.alert("업로드 실패", "이미지를 업로드하지 못했습니다.");
    }
  };

  const ImageItems: ImageItemsType[] = [
    {
      text: "사진 앨범",
      onPress: openAlbum,
    },
    {
      text: "카메라",
      onPress: openCamera,
    },
  ];

  const renderItem = ({ item }: { item: ImageItemsType }) => {
    return (
      <Pressable style={[styles.boxWrap]} onPress={item.onPress}>
        <Text style={styles.itemText}>{item.text}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.itemWrap}>
      <FlatList
        data={ImageItems}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ImageItem;
