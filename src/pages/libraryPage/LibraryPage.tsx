import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./LibraryPageStyle";
import MainHeader from "../../components/header/MainHeader";
import BookList from "../../components/libary/BookList";
import { dummyList } from "../../assets/data/dummyBookCarouseList";

const LibraryPage = ({ navigation }: { navigation: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <MainHeader navigation={navigation} />
      <BookList
        navigation={navigation}
        editType={false}
        data={dummyList}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </View>
  );
};

export default LibraryPage;
