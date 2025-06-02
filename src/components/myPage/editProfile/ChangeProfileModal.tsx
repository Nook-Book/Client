import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Linking,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Cancel from "../../../assets/images/icon/Cancel.svg";
import {
  usePatchDefaultImage,
  usePutProfileImage,
} from "../../../hooks/mypage/useMyPage";
import { styles } from "../../../styles/myPage/editProfilePage/EditProfileModalStyle";
import { Color } from "../../../styles/Theme";

interface ChangeProfileModalProps {
  isVisible: boolean;
  onClose: () => void;
  refetch: () => void;
}

const ChangeProfileModal: React.FC<ChangeProfileModalProps> = ({
  isVisible,
  onClose,
  refetch,
}) => {
  const [image, setImage] = useState<any>(null);
  const { mutate: changeProfileImage } = usePutProfileImage();
  const { mutate: patchDefaultImage } = usePatchDefaultImage();
  useEffect(() => {
    if (image) {
      handleChangeProfileImage();
      setImage(null);
    }
  }, [image]);

  // 이미지 선택
  const handleImagePicker = async () => {
    let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Please grant permission to use this feature",
        [
          { text: "Open settings", onPress: () => Linking.openSettings() },
          { text: "Cancel" },
        ]
      );
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "livePhotos", "videos"],
      allowsMultipleSelection: false,
      selectionLimit: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const handleCamera = async () => {
    let { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Please grant permission to use this feature",
        [
          { text: "Open settings", onPress: () => Linking.openSettings() },
          { text: "Cancel" },
        ]
      );
      return;
    }
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images", "livePhotos", "videos"],
      allowsMultipleSelection: true,
      selectionLimit: 5,
    });

    if (!result.canceled) {
      setImage(result.assets[0]); // 첫 번째 이미지 객체 저장
    }
  };

  // 이미지 변경
  const handleChangeProfileImage = () => {
    // console.log("Current image:", image); // 디버깅용 s로그
    if (image) {
      changeProfileImage(image, {
        onSuccess: () => {
          refetch();
          onClose();
        },
        onError: () => {
          Alert.alert("Error.");
        },
      });
    } else {
      Alert.alert("이미지를 선택해주세요.");
    }
  };

  // 기본 이미지 사용
  const handleDefaultImage = async () => {
    console.log("patchDefaultImage");

    patchDefaultImage(undefined, {
      onSuccess: () => {
        refetch();
        onClose();
      },
      onError: () => {
        Alert.alert("Error.");
      },
    });
  };

  return (
    <Modal visible={isVisible} transparent={true} onRequestClose={onClose}>
      <View style={styles.modal}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Cancel />
          </TouchableOpacity>

          <Text style={styles.title}>사진 선택</Text>

          <TouchableOpacity style={styles.button} onPress={handleImagePicker}>
            <Text style={styles.buttonText}>사진앨범</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCamera}>
            <Text style={styles.buttonText}>카메라</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              { borderBottomWidth: 1, borderBottomColor: Color.Border.Stroke },
            ]}
            onPress={handleDefaultImage}
          >
            <Text style={styles.buttonText}>기본 이미지 사용</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ChangeProfileModal;
