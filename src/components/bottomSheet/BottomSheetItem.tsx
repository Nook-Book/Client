import { Pressable, Text } from "react-native";
import { styles } from "../../styles/bottomSheet/BottomSheetStyle";

const BottomSheetItem = ({
  Icon,
  text,
  onPress,
}: {
  Icon: any;
  text: string;
  onPress: () => void;
}) => {
  return (
    <Pressable style={styles.shareWrap} onPress={onPress}>
      <Icon />
      <Text style={styles.shareText}>{text}</Text>
    </Pressable>
  );
};

export default BottomSheetItem;
