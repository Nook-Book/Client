import { Image, Pressable, Text, View } from "react-native";
import { styles } from "../../styles/search/ResultBookCardStyle";
import { ResultBookProp } from "../../types/search";
import { useNavigation } from "@react-navigation/native";
import { DetailNavigationProp } from "../../types/detail";
const ResultBookCard = ({
  image,
  title,
  artist,
  publisher,
  isbn,
}: ResultBookProp) => {
  const navigation = useNavigation<DetailNavigationProp>();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Detail", { isbn })}
    >
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
    </Pressable>
  );
};

export default ResultBookCard;
