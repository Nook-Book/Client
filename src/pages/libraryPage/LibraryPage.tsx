import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { getCurrentList } from "../../api/collection/getCurrentList";
import MainHeader from "../../components/header/MainHeader";
import BookList from "../../components/libary/BookList";
import { styles } from "../../styles/library/LibraryPageStyle";
import { TMainCollectionListDetailRes } from "../../types/library";

const LibraryPage = ({ navigation }: { navigation: any }) => {
  const [list, setList] = useState<TMainCollectionListDetailRes[]>([]);
  const [_, setCurrentIndex] = useState(0);

  const fetchCollectionList = async () => {
    try {
      const response = await getCurrentList();
      if (response?.check && response.information.mainCollectionListDetailRes) {
        setList(response.information.mainCollectionListDetailRes);
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchCollectionList();
    }, [])
  );

  return (
    <View style={styles.container}>
      <MainHeader navigation={navigation} />
      <BookList
        navigation={navigation}
        editType={false}
        data={list}
        setCurrentIndex={setCurrentIndex}
      />
    </View>
  );
};

export default LibraryPage;
