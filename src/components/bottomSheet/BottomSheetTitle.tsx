import { View, Text, Pressable } from "react-native";
import { styles } from "../../styles/bottomSheet/BottomSheetStyle";
import CancelIcon from "../../assets/images/icon/Cancel.svg";

const BottomSheetTitle = ({
  text,
  onClose,
  onComplete,
}: {
  text: string;
  onClose: () => void;
  onComplete?: () => void;
}) => {
  return (
    <View style={styles.topWrap}>
      <CancelIcon style={styles.closeIcon} onPress={onClose} />
      <Text style={styles.headText}>{text}</Text>
      {onComplete && (
        <Pressable style={styles.complateWrap} onPress={onComplete}>
          <Text style={styles.complateText}>완료</Text>
        </Pressable>
      )}
    </View>
  );
};

export default BottomSheetTitle;
