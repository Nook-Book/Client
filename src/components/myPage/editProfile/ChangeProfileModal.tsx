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

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
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
          onPress={handleChangeProfileImage}
        >
          <Text style={styles.buttonText}>기본 이미지 사용</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ChangeProfileModal;
