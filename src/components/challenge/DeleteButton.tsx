import { Pressable, Text } from "react-native";
import { styles } from "../../styles/challenge/DeleteButtonStyle";

const DeleteButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <Pressable style={styles.buttonWrap} onPress={onPress}>
      <Text style={styles.buttonText}>챌린지 삭제</Text>
    </Pressable>
  );
};

export default DeleteButton;
