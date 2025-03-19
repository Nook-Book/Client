import { useNavigation } from "@react-navigation/native";
import { TextInput, View } from "react-native";
import BackTitleHeader from "../../components/header/BackTitleHeader";
import { styles } from "../../styles/myPage/reportPage/MyReportPageStyle";
const MyReportPage = () => {
  const navigation = useNavigation();

  // 도서 기록 데이터
  //   const { data: bookRecords } = useGetBookRecord();

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
      />
    </View>
  );
};

export default MyReportPage;
