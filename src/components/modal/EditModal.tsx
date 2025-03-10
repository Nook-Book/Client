import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/modal/ModalStyle";

const EditModal = ({
  visible,
  text,
  leftText,
  rightText,
  onClose,
  onComplate,
}: {
  visible: boolean;
  text: string;
  leftText: string;
  rightText: string;
  onClose: () => void;
  onComplate: () => void;
}) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.contentText}>{text}</Text>
        <View style={styles.buttonWrap}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.blueText}>{leftText}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onComplate}>
            <Text style={styles.grayText}>{rightText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditModal;
