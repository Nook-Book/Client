import { Asset } from "expo-asset";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import Cancel from "../../../assets/images/icon/Cancel.svg";
import { usePutProfileImage } from "../../../hooks/mypage/useMyPage";
import { styles } from "../../../styles/myPage/editProfilePage/EditProfileModalStyle";
import { Color } from "../../../styles/Theme";

interface ChangeProfileModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const ChangeProfileModal: React.FC<ChangeProfileModalProps> = ({
  isVisible,
  onClose,
}) => {
  const [image, setImage] = useState<any>(null);
  const { mutate: changeProfileImage } = usePutProfileImage();

  // 이미지 선택
  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0]);
      setImage(result.assets[0]); // 선택된 이미지 저장
      handleChangeProfileImage();
    }
  };

  const handleCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0]); // 찍은 사진 저장
      console.log(image);
      handleChangeProfileImage();
    }
  };

  // 이미지 변경
  const handleChangeProfileImage = () => {
    if (image) {
      changeProfileImage(image, {
        onSuccess: () => {
          onClose();
        },
        onError: () => {
          Alert.alert("Error.");
        },
      }); // 이미지를 업로드하는 훅 호출
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
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      swipeDirection="down"
      onSwipeComplete={onClose}
      style={styles.modal}
    >
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
    </Modal>
  );
};

export default ChangeProfileModal;
