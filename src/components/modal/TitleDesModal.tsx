import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/modal/ModalStyle";

const TitleDesModal = ({
  titleText,
  desText,
  onClose,
  onComplate,
}: {
  titleText: string;
  desText: string;
  onClose: () => void;
  onComplate: () => void;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.headText}>{titleText}</Text>
        <Text style={styles.desText}>{desText}</Text>
        <View style={styles.buttonWrap}>
          <TouchableOpacity onPress={onComplate}>
            <Text style={styles.grayText}>삭제하기</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.blueText}>취소</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TitleDesModal;
