import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/modal/ModalStyle";

const DeleteModal = ({
  visible,
  leftText,
  text,
  onClose,
  onComplate,
}: {
  visible: boolean;
  leftText?: string;
  text: string;
  onClose: () => void;
  onComplate: () => void;
}) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.contentText}>{text}</Text>
        <View style={styles.buttonWrap}>
          <TouchableOpacity onPress={onComplate}>
            <Text style={styles.grayText}>{leftText || "삭제"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.blueText}>취소</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DeleteModal;
