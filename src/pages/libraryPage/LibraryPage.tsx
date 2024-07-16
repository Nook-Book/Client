import React from "react";
import { View, Text, Image, FlatList, ScrollView } from "react-native";
import { styles } from "./LibraryPageStyle";
import MainHeader from "../../components/header/MainHeader";

interface Book {
  id: number;
  image: any;
  title: string;
}

interface BookCategory {
  id: number;
  title: string;
  dummyBook: Book[];
}

export default function LibraryPage({ navigation }: { navigation: any }) {
  const dummyBook: Book[] = [
    {
      id: 1,
      image: require("../../assets/images/dummy/book/1.png"),
      title: "무지개 물고기",
    },
    {
      id: 2,
      image: require("../../assets/images/dummy/book/2.png"),
      title: "몰입 : 인생을 바꾸는자기 혁명 - Think",
    },
    {
      id: 3,
      image: require("../../assets/images/dummy/book/3.png"),
      title: "세이노의 가르침 (70만 부 기념 빨간 표지 빨간 표지)",
    },
    {
      id: 4,
      image: require("../../assets/images/dummy/book/4.png"),
      title: "데일 카네기 자기관리론",
    },
    {
      id: 5,
      image: require("../../assets/images/dummy/book/5.png"),
      title: "text",
    },
    {
      id: 6,
      image: require("../../assets/images/dummy/book/6.png"),
      title: "원씽",
    },
    {
      id: 7,
      image: require("../../assets/images/dummy/book/7.png"),
      title: "그릿",
    },
    {
      id: 8,
      image: require("../../assets/images/dummy/book/8.png"),
      title: "역행자",
    },
    {
      id: 9,
      image: require("../../assets/images/dummy/book/9.png"),
      title: "하루하루가 이별의 날",
    },
    {
      id: 15,
      image: require("../../assets/images/dummy/book/5.png"),
      title: "text",
    },
    {
      id: 61,
      image: require("../../assets/images/dummy/book/6.png"),
      title: "원씽",
    },
    {
      id: 17,
      image: require("../../assets/images/dummy/book/7.png"),
      title: "그릿",
    },
    {
      id: 18,
      image: require("../../assets/images/dummy/book/8.png"),
      title: "역행자",
    },
    {
      id: 19,
      image: require("../../assets/images/dummy/book/9.png"),
      title: "하루하루가 이별의 날",
    },
  ];

  const dummyList: BookCategory[] = [
    {
      id: 1,
      title: "읽고 싶은",
      dummyBook: dummyBook,
    },
    {
      id: 2,
      title: "읽는 중",
      dummyBook: dummyBook,
    },
    {
      id: 3,
      title: "읽음",
      dummyBook: dummyBook,
    },
  ];

  const renderBookItem = ({ item }: { item: Book }) => (
    <View style={styles.bookItem} key={item.id}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.titleText} numberOfLines={2}>
        {item.title}
      </Text>
    </View>
  );

  const renderCarouselItem = ({ item }: { item: BookCategory }) => {
    return (
      <View style={styles.listWrap} key={item.id}>
        <View style={styles.inner}>
          <Text style={styles.subText}>{item.dummyBook.length}권</Text>
          <Text style={styles.mainText}>{item.title}</Text>
        </View>
        <FlatList
          data={item.dummyBook}
          renderItem={renderBookItem}
          keyExtractor={(book) => book.id.toString()}
          numColumns={3}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <MainHeader navigation={navigation} />
      <ScrollView
        horizontal
        contentContainerStyle={styles.horizontalScrollView}
        showsHorizontalScrollIndicator={false}
      >
        {dummyList.map((data) => renderCarouselItem({ item: data }))}
      </ScrollView>
    </View>
  );
}
