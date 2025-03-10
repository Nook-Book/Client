import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/modal/ModalStyle";

const MaxCollectionModal = ({
  visible,
  text,
  onClose,
}: {
  visible: boolean;
  text: string;
  onClose: () => void;
}) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.contentText}>{text}</Text>
        <View style={styles.buttonWrap}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.blueText}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MaxCollectionModal;
