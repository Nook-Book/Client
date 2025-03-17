import { Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/join/joinPage";

const CheckButton = ({
  onPress,
  isActive,
}: {
  onPress: () => void;
  isActive: boolean;
}) => {
  return (
    <TouchableOpacity
      style={[styles.checkButton, isActive && styles.activeButton]}
      onPress={onPress}
      disabled={!isActive}
    >
      <Text style={[styles.buttonText, isActive && styles.activeButtonText]}>
        중복확인
      </Text>
    </TouchableOpacity>
  );
};

export default CheckButton;
