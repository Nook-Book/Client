import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackTextHeader from "../../components/header/BackTextHeader";
import MyCollectionDetailItem from "../../components/myPage/collection/MyCollectionDetailItem";
import { useGetCollectionDetail } from "../../hooks/mypage/useCollection";
import { Color, Font } from "../../styles/Theme";
import { MyCollectionDetailRouteProp } from "../../types/navigation/navigation";
const MyCollectionDetailPage = ({
  route,
}: {
  route: MyCollectionDetailRouteProp;
}) => {
  const { collectionId, collectionTitle } = route.params;
  const { data: collectionDetail } = useGetCollectionDetail(collectionId);
  return (
    <View style={styles.container}>
      <BackTextHeader title={collectionTitle} />
      <View style={styles.headerContainer}>
        <View style={styles.bookCountContainer}>
          <Text style={styles.headerText}>6</Text>
          <Text style={styles.bookCountText}>권</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.headerText}>편집</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.collectionDetailContainer}>
        {collectionDetail?.information.collectionBooksListDetailRes.map(
          (item) => (
            <MyCollectionDetailItem key={item.bookId} item={item} />
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Secondary,
    flexDirection: "column",
    height: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  bookCountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Primary,
  },
  bookCountText: {
    ...Font.Paragraph.SemiMedium,
    color: Color.Typo.Secondary,
  },
  collectionDetailContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
  },
});

export default MyCollectionDetailPage;
