import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BackTitleHeader from "../../components/header/BackTitleHeader";
import { useNote } from "../../hooks/mypage/useNote";
import { styles } from "../../styles/myPage/reportPage/MyReportPageStyle";
import { RootMyPageStackParamList } from "../../types/navigation/navigation";

type MyReportPageNavigationProp = NativeStackNavigationProp<
  RootMyPageStackParamList,
  "MyReportPage"
>;

const MyReportPage = ({
  route,
  navigation,
}: {
  route: any;
  navigation: MyReportPageNavigationProp;
}) => {
  const { userId } = route.params;
  const [keyword, setKeyword] = useState("");

  // 도서 기록 데이터
  const { data: bookRecords, refetch } = useNote(userId, keyword);

  useEffect(() => {
    refetch();
  }, [keyword]);

  return (
    <View style={styles.container}>
      <BackTitleHeader
        title={"기록 전체 보기"}
        isTitleVisible={true}
        navigation={navigation}
      />
      <TextInput
        placeholder="도서명을 검색하세요."
        style={styles.searchInput}
        onChangeText={setKeyword}
        value={keyword}
      />
      <ScrollView style={styles.bookRecordContainer}>
        {bookRecords?.information.map((book) => (
          <TouchableOpacity
            style={styles.bookRecordItem}
            key={book.bookId}
            onPress={() => {
              navigation.navigate("AllNote", {
                userId,
                bookId: book.bookId,
              });
            }}
          >
            <Image
              source={{ uri: book.cover }}
              style={styles.bookRecordImage}
            />
            <View style={styles.bookRecordInfo}>
              <Text style={styles.bookRecordTitle}>{book.title}</Text>
              <View>
                <Text style={styles.bookRecordAuthor}>{book.author}</Text>
                <Text style={styles.bookRecordPublisher}>{book.publisher}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default MyReportPage;
