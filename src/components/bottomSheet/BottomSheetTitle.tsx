import { View, Text } from "react-native";
import { styles } from "../../styles/bottomSheet/BottomSheetStyle";
import CancelIcon from "../../assets/images/icon/Cancel.svg";

const BottomSheetTitle = ({
  text,
  onClose,
}: {
  text: string;
  onClose: () => void;
}) => {
  return (
    <View style={styles.topWrap}>
      <CancelIcon style={styles.closeIcon} onPress={onClose} />
      <Text style={styles.headText}>{text}</Text>
    </View>
  );
};

export default BottomSheetTitle;
