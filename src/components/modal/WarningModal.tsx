import { View, Text, TouchableOpacity, Modal } from "react-native";
import { styles } from "../../styles/modal/ModalStyle";

const WarningModal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
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
          <Text style={styles.warningTitleText}>색상 변경 주의</Text>
          <Text style={styles.warningContentText}>
            텍스트, 배경 색 변경 시, {"\n"}색상 중첩이 불가합니다.
          </Text>
          <Text style={styles.warningText}>
            *중첩 시, 색이 변경되지 않을 수 있습니다.
          </Text>
          <View style={styles.buttonWrap}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.blueText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default WarningModal;
