import { View, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "../../styles/modal/ModalStyle";

const TitleDesModal = ({
  visible,
  titleText,
  desText,
  onClose,
  onComplate,
}: {
  visible: boolean;
  titleText: string;
  desText: string;
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
          <Text style={styles.headText}>{titleText}</Text>
          <Text style={styles.desText}>{desText}</Text>
          <View style={styles.buttonWrap}>
            <TouchableOpacity onPress={onComplate}>
              <Text style={styles.grayText}>삭제</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.blueText}>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TitleDesModal;
