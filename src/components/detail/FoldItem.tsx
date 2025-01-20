import BackIcon from "../../assets/images/icon/Back.svg";
import { View, Text, Pressable } from "react-native";
import { styles } from "../../styles/detail/FoldItemStyle";
import { Color } from "../../styles/Theme";

const FoldItem = ({
  isFold,
  onPress,
  title,
  content,
}: {
  isFold: boolean;
  onPress: () => void;
  title: string;
  content: string;
}) => {
  return (
    <View>
      <Pressable
        style={[styles.moreWrap, { borderBottomWidth: isFold ? 0 : 0.8 }]}
        onPress={onPress}
      >
        <Text style={styles.moreText}>{title}</Text>
        <BackIcon
          style={{
            transform: [{ rotate: isFold ? "90deg" : "270deg" }],
          }}
          color={Color.Contents.Icon}
        />
      </Pressable>
      {isFold && (
        <View
          style={[styles.moreView, { borderBottomWidth: isFold ? 0.8 : 0 }]}
        >
          <Text style={styles.moreViewText}>{content}</Text>
        </View>
      )}
    </View>
  );
};

export default FoldItem;
