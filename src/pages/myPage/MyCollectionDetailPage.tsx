import React from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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

  // 화면 너비 가져오기
  const { width } = Dimensions.get("window");

  // 아이템 사이 간격
  const gap = 12;

  // 패딩 (좌우)
  const padding = 16;

  // 아이템 너비 계산 (화면 너비 - 좌우 패딩 - 아이템 사이 간격) / 3
  const itemWidth = (width - padding * 2 - gap * 2) / 3;

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
        <FlatList
          data={collectionDetail?.information.collectionBooksListDetailRes}
          renderItem={({ item }) => (
            <MyCollectionDetailItem item={item} width={itemWidth} />
          )}
          keyExtractor={(item) => item.bookId.toString()}
          numColumns={3}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
        />
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
    gap: 16,
    flex: 1,
    justifyContent: "space-between",
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 12,
  },
});

export default MyCollectionDetailPage;
