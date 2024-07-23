import { Text, View } from "react-native";
import { BestSellerButton, BestSellerLabel } from "../../constans/search";

const BestSeller = () => {
  return (
    <View>
      <Text>{BestSellerLabel}</Text>
      <Text>{BestSellerButton}</Text>
    </View>
  );
};
export default BestSeller;
