import { Asset } from "expo-asset";
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
import { usePutProfileImage } from "../../../hooks/mypage/useMyPage";
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
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
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
    const fileUri = Asset.fromModule(
      require("../../../assets/images/profile/ProfileImage.svg")
    ).uri;

    // fetch를 이용하여 Blob 변환
    const response = await fetch(fileUri);
    const blob = await response.blob();

    // Blob을 사용하여 생성
    const file = new File([blob], "ProfileImage.svg", {
      type: "image/svg+xml",
    });

    changeProfileImage(file, {
      onSuccess: () => {
        onClose();
      },
      onError: () => {
        Alert.alert("Error");
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
