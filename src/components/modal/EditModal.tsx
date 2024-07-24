import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/modal/ModalStyle";

const EditModal = ({
  text,
  onClose,
  onComplate,
}: {
  text: string;
  onClose: () => void;
  onComplate: () => void;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.contentText}>{text}</Text>
        <View style={styles.buttonWrap}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.blueText}>돌아가기</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onComplate}>
            <Text style={styles.grayText}>완료</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditModal;
