import React, { useCallback, useRef, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Linking,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Animated,
  Easing,
} from "react-native";
import { styles } from "../../styles/detail/DetailPageStyle";
import BackShareHeader from "../../components/header/BackShareHeader";
import ReadDefaultIcon from "../../assets/images/icon/ReadDefault.svg";
import ReadIcon from "../../assets/images/icon/Read.svg";
import ColletionIcon from "../../assets/images/icon/Colletion.svg";
import ColletionClickIcon from "../../assets/images/icon/ColletionClick.svg";
import ColletionAniIcon from "../../assets/images/icon/ColletionAni.svg";
import NoteIcon from "../../assets/images/icon/Note.svg";
import TimerIcon from "../../assets/images/icon/Timer.svg";
import FoldItem from "../../components/detail/FoldItem";
import IconItem from "../../components/detail/IconItem";
import InfoItem from "../../components/detail/InfoItem";
import ShareBottomSheet from "../../components/bottomSheet/ShareBottomSheet";
import CollectionBottomSheet from "../../components/bottomSheet/CollectionBottomSheet";
import { getBookDetail } from "../../api/book/getBookDetail";
import { useFocusEffect } from "@react-navigation/native";
import { TBookDetailInformationRes } from "../../types/detail";
import { patchBookDetailStatus } from "../../api/book/patchBookDetailStatus";
import { deleteBook } from "../../api/collection/deleteBook";
import { postAddBook } from "../../api/collection/postAddBook";

const DetailPage = ({ navigation, route }: { navigation: any; route: any }) => {
  const isbn = route?.params?.isbn;
  const [book, setBook] = useState<TBookDetailInformationRes>();

  const fetchBookDetail = async () => {
    try {
      const response = await getBookDetail(isbn);
      if (response?.check) {
        setBook(response.information);
        setSelectedCollection(response.information.collectionIds);
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchBookDetail();
    }, [])
  );

  const [isMoreInfo, setIsMoreInfo] = useState(false);
  const [isIndex, setIsIndex] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isShareVisible, setIsShareVisible] = useState(false);
  const [isCollectionVisible, setIsCollectionVisible] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<number[]>([]); //선택한 컬렉션 id
  const [showIconAnimation, setShowIconAnimation] = useState(false);
  const animationValue = useRef(new Animated.Value(0)).current;

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const threshold = 278;
    setIsTitleVisible(scrollY > threshold);
  };

  //컬렉션 선택 함수
  const handleCollectionPress = (id: number) => {
    setSelectedCollection((prevSelectedCollection) => {
      if (prevSelectedCollection.includes(id)) {
        return prevSelectedCollection.filter((itemId) => itemId !== id);
      } else {
        return [...prevSelectedCollection, id];
      }
    });
  };

  //컬렉션 저장 함수
  const handleSaveCollectionPress = async () => {
    try {
      if (!book) return;

      const deleteBooks = book.collectionIds.filter(
        (id) => !selectedCollection.includes(id)
      );
      const addBooks = selectedCollection.filter(
        (id) => !book.collectionIds.includes(id)
      );

      const deleteResults = await Promise.all(
        deleteBooks.map((collectionId) =>
          deleteBook(collectionId, [book.bookId])
        )
      );

      if (deleteResults.some((res) => !res.check)) {
        console.error("컬렉션 삭제 중 오류 발생");
        return;
      }

      const addResults = await Promise.all(
        addBooks.map((collectionId) => postAddBook(collectionId, book.bookId))
      );

      if (addResults.some((res) => !res.check)) {
        console.error("컬렉션 추가 중 오류 발생");
        return;
      }

      setIsCollectionVisible(false);
      setBook((prev) => {
        if (prev) {
          return {
            ...prev,
            storedCollection: selectedCollection.length > 0,
            collectionIds: selectedCollection,
          };
        }
        return prev;
      });

      if (
        isCollectionVisible &&
        selectedCollection.length > 0 &&
        book?.collectionIds.length === 0
      ) {
        setShowIconAnimation(true);
        Animated.sequence([
          Animated.timing(animationValue, {
            toValue: 1,
            duration: 400,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.timing(animationValue, {
            toValue: 1,
            duration: 500,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.timing(animationValue, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ]).start(() => {
          setShowIconAnimation(false);
        });
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  //도서 상태 변경 함수
  const handleReadStatus = async () => {
    try {
      if (book) {
        const response = await patchBookDetailStatus(book.bookId);

        if (response?.check) {
          setBook((prev) => {
            if (prev) {
              return {
                ...prev,
                bookStatus: response.information,
              };
            }
            return prev;
          });
        }
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  return (
    <View style={styles.container}>
      {book && (
        <>
          <View style={{ height: 50 }}></View>
          <BackShareHeader
            title={book?.item.title}
            isTitleVisible={isTitleVisible}
            onSharePress={() => setIsShareVisible(!isShareVisible)}
          />
          <ScrollView
            onScroll={handleScroll}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.scrollWrap}>
              <View style={styles.mainWrap}>
                <Image
                  source={{ uri: book?.item.cover }}
                  style={styles.image}
                />
                <Text style={styles.titleText}>{book?.item.title}</Text>
                <Text style={styles.authorText}>{book?.item.author}</Text>
              </View>
              <View style={styles.iconWrap}>
                <IconItem
                  IconComponent={
                    book.bookStatus === "READ" ? ReadIcon : ReadDefaultIcon
                  }
                  text={book.bookStatus === "READ" ? "읽음" : "읽기 전"}
                  onPress={handleReadStatus}
                  isActive={book.bookStatus === "READ"}
                />
                <IconItem
                  IconComponent={
                    book?.storedCollection ? ColletionClickIcon : ColletionIcon
                  }
                  text="컬렉션"
                  onPress={() => setIsCollectionVisible(!isCollectionVisible)}
                  isActive={false}
                />
                <IconItem
                  IconComponent={NoteIcon}
                  text="노트"
                  onPress={() =>
                    book?.hasNote
                      ? navigation.navigate("AllNote", { bookId: book.bookId })
                      : navigation.navigate("Write", {
                          bookId: book.bookId,
                          isFirst: true,
                        })
                  }
                  isActive={false}
                />
                <IconItem
                  IconComponent={TimerIcon}
                  text="타이머"
                  onPress={() =>
                    navigation.navigate("Timer", { bookId: book.bookId })
                  }
                  isActive={false}
                />
              </View>
              <View style={styles.infoWrap}>
                <InfoItem title="ISBN" content={book?.item.isbn13} />
                <InfoItem title="출판일" content={book?.item.pubDate} />
                <InfoItem title="페이지" content={`${book?.item.itemPage}p`} />
              </View>
              {book?.item.fullDescription && (
                <FoldItem
                  isFold={isMoreInfo}
                  onPress={() => setIsMoreInfo(!isMoreInfo)}
                  title="상세 정보"
                  content={book?.item.fullDescription}
                />
              )}
              {book?.item.toc && (
                <FoldItem
                  isFold={isIndex}
                  onPress={() => setIsIndex(!isIndex)}
                  title="목차"
                  content={book?.item.toc}
                />
              )}
              <View style={styles.sourceWrap}>
                <Text
                  style={styles.sourceLink}
                  onPress={() => Linking.openURL(book?.item.link)}
                >
                  자세히보기
                </Text>
                <Text style={styles.sourceText}>
                  도서 DB 제공 : 알라딘 인터넷서점(www.aladin.co.kr)
                </Text>
              </View>
            </View>
          </ScrollView>
          {isShareVisible && (
            <ShareBottomSheet
              isbn={isbn}
              cover={book.item.cover}
              title={book.item.title}
              author={book.item.author}
              onClose={() => setIsShareVisible(false)}
            />
          )}
          {isCollectionVisible && (
            <CollectionBottomSheet
              onClose={() => {
                setSelectedCollection(book.collectionIds);
                setIsCollectionVisible(false);
              }}
              clickList={selectedCollection}
              onComplete={() => handleSaveCollectionPress()}
              onPress={(id) => handleCollectionPress(id)}
            />
          )}
          {showIconAnimation && (
            <Animated.View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
                transform: [{ scale: animationValue }],
              }}
            >
              <ColletionAniIcon />
            </Animated.View>
          )}
        </>
      )}
    </View>
  );
};

export default DetailPage;
