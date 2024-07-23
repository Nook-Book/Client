import { View, Image, Text } from "react-native";
import { ResultBookProp } from "../../types/search";
import { styles } from "../../styles/search/ResultBookCardStyle";
const ResultBookCard = ({
  image,
  title,
  artist,
  publisher,
}: ResultBookProp) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.cardConatiner}>
        <Text style={styles.title} ellipsizeMode="tail">
          {title}
        </Text>
        <View>
          <Text style={styles.artist}>{artist}</Text>
          <Text style={styles.publisher}>{publisher}</Text>
        </View>
      </View>
    </View>
  );
};

export default ResultBookCard;
