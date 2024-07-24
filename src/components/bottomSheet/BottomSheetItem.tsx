import { Pressable, Text } from "react-native";
import { styles } from "../../styles/bottomSheet/BottomSheetStyle";

const BottomSheetItem = ({
  Icon,
  leftText,
  rightText,
  onPress,
}: {
  Icon: JSX.Element;
  leftText: string;
  rightText: string;
  onPress: () => void;
}) => {
  return (
    <Pressable style={styles.pressWrap} onPress={onPress}>
      {Icon}
      <Text style={styles.leftText}>{leftText}</Text>
      <Text style={styles.rightText}>{rightText}</Text>
    </Pressable>
  );
};

export default BottomSheetItem;
