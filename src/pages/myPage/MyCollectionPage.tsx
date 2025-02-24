import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/myPage/collectionPage/MyCollectionPageStyle";

import MyPageAtherNav from "../../components/myPage/MyPageAtherNav";
import { useGetCollection } from "../../hooks/mypage/useCollection";

import MinusIcon from "../../assets/images/icon/Minus.svg";
import MyCollectionItem from "../../components/myPage/collection/MyCollectionItem";
const MyCollectionPage = () => {
  const { data: collections } = useGetCollection();
  return (
    <View style={styles.container}>
      <MyPageAtherNav title="컬렉션 전체보기" />
      <View style={styles.collectionNav}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>추가</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buttonText}>삭제</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.collectionContainer}>
        <Text style={styles.label}>
          전체{" "}
          <Text style={styles.lobel_Bold}>
            {collections.information.totalCollections}
          </Text>
          개
        </Text>
        {collections.information.collectionListDetailRes.map(
          (collection, index) => (
            <MyCollectionItem
              key={index}
              item={collection}
              isPlusItem={false}
              onPress={function (): void {
                throw new Error("Function not implemented.");
              }}
              icon={MinusIcon}
            />
          )
        )}
      </ScrollView>
    </View>
  );
};

export default MyCollectionPage;
