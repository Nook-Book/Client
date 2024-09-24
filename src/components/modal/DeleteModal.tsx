import { View, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "../../styles/modal/ModalStyle";

const DeleteModal = ({
  visible,
  text,
  onClose,
  onComplate,
}: {
  visible: boolean;
  text: string;
  onClose: () => void;
  onComplate: () => void;
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.contentText}>{text}</Text>
          <View style={styles.buttonWrap}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.blueText}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onComplate}>
              <Text style={styles.grayText}>삭제</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;
