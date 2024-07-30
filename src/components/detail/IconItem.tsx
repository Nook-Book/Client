import { styles } from "../../styles/detail/IconItemStyle";
import { Color } from "../../styles/Theme";
import { Pressable, Text } from "react-native";

const IconItem = ({
  IconComponent,
  text,
  onPress,
  isActive,
}: {
  IconComponent: any;
  text: string;
  onPress: () => void;
  isActive: boolean;
}) => (
  <Pressable style={styles.iconWrapItem} onPress={onPress}>
    <IconComponent width={48.13} height={48.13} />
    <Text
      style={[
        styles.iconText,
        { color: isActive ? Color.Contents.Click : Color.Typo.Primary },
      ]}
    >
      {text}
    </Text>
  </Pressable>
);

export default IconItem;
