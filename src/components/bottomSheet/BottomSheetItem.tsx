import { Pressable, Text } from "react-native";
import { styles } from "../../styles/bottomSheet/BottomSheetStyle";

const BottomSheetItem = ({
  Icon,
  leftText,
  rightText,
  onPress,
  isClick,
}: {
  Icon: JSX.Element;
  leftText: string;
  rightText: string;
  onPress: () => void;
  isClick?: boolean;
}) => {
  return (
    <Pressable
      style={[
        styles.pressWrap,
        isClick && { backgroundColor: "rgba(165, 211, 255, 0.15)" },
      ]}
      onPress={onPress}
    >
      {Icon}
      <Text style={styles.leftText}>{leftText}</Text>
      <Text style={styles.rightText}>{rightText}</Text>
    </Pressable>
  );
};

export default BottomSheetItem;
