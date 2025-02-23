import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { styles } from "../../styles/library/LibraryPageStyle";
import MainHeader from "../../components/header/MainHeader";
import BookList from "../../components/libary/BookList";
import { TMainCollectionListDetailRes } from "../../types/library";
import { getCurrentList } from "../../api/collection/getCurrentList";
import { useFocusEffect } from "@react-navigation/native";

const LibraryPage = ({ navigation }: { navigation: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [list, setList] = useState<TMainCollectionListDetailRes[]>([]);

  const fetchCollectionList = async () => {
    try {
      const response = await getCurrentList();
      if (response?.check) {
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
