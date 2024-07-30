import { View, Text } from "react-native";
import { styles } from "../../styles/detail/InfoItemStyle";

const InfoItem = ({ title, content }: { title: string; content: string }) => {
  return (
    <View style={styles.infoWrapItem}>
      <Text style={styles.infoWrapItemTitleText}>{title}</Text>
      <Text style={styles.infoWrapItemContentText}>{content}</Text>
    </View>
  );
};

export default InfoItem;
