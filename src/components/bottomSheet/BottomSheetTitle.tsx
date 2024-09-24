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
      <Pressable style={styles.leftWrap} onPress={onClose}>
        <CancelIcon />
      </Pressable>
      <Text style={styles.headText}>{text}</Text>
      {onComplete && (
        <Pressable style={styles.rightWrap} onPress={onComplete}>
          <Text style={styles.complateText}>완료</Text>
        </Pressable>
      )}
    </View>
  );
};

export default BottomSheetTitle;
