import { Image, Text, View } from "react-native";
import { styles } from "../../styles/search/ResultBookCardStyle";
import { ResultBookProp } from "../../types/search";
const ResultBookCard = ({
  image,
  title,
  artist,
  publisher,
}: ResultBookProp) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
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
