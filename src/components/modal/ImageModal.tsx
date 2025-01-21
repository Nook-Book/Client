import React from "react";
import { View, Text, Modal, Alert, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { styles } from "../../styles/modal/ImageModalStyle";
import { TImagePickerModalProps } from "../../types/challenge";

const ImagePickerModal = ({
  visible,
  onClose,
  onImagePicked,
}: TImagePickerModalProps) => {
  const launchCameraHandler = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted) {
      const result: any = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [5, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        onImagePicked(result.assets[0].uri || null);
      }
    } else {
      Alert.alert("권한 오류", "카메라 접근 권한이 필요합니다.");
    }
    onClose();
  };

  const launchImageLibraryHandler = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [5, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        onImagePicked(result.assets[0].uri);
      }
    } else {
      Alert.alert("권한 오류", "미디어 라이브러리 접근 권한이 필요합니다.");
    }
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Pressable
            style={styles.modalButton}
            onPress={launchImageLibraryHandler}
          >
            <Text style={styles.modalButtonText}>사진 보관함</Text>
          </Pressable>
          <Pressable style={styles.modalButton} onPress={launchCameraHandler}>
            <Text style={styles.modalButtonText}>사진 찍기</Text>
          </Pressable>
          <Pressable
            style={[styles.modalButton, { borderBottomWidth: 0 }]}
            onPress={onClose}
          >
            <Text style={styles.modalButtonText}>취소</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ImagePickerModal;
