import { Pressable, Text } from "react-native";
import { styles } from "../../styles/challenge/DeleteButtonStyle";

const DeleteButton = ({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}) => {
  return (
    <Pressable style={styles.buttonWrap} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default DeleteButton;
