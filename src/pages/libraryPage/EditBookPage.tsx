import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { styles } from "../../styles/library/EditBookPageStyle";
import EditHeader from "../../components/header/EditHeader";
import BookList from "../../components/libary/BookList";
import { useCallback, useState } from "react";
import PlusIcon from "../../assets/images/icon/Plus.svg";
import { Color } from "../../styles/Theme";
import { TMainCollectionListDetailRes } from "../../types/library";
import { getCurrentList } from "../../api/collection/getCurrentList";
import EditModal from "../../components/modal/EditModal";
import { useFocusEffect } from "@react-navigation/native";

const EditBookPage = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { height: windowHeight } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const isTaskComplete = route?.params?.isTaskComplete;

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
      <View style={{ height: 50 }}></View>
      <EditHeader
        onCancel={() => navigation.navigate("Library")}
        onComplete={() => {
          isTaskComplete
            ? navigation.navigate("Library")
            : setEditModalVisible(true);
        }}
      />
      <Text style={styles.numText}>{currentIndex + 1}번째</Text>
      <View style={{ height: windowHeight / 1.43 }}>
        <BookList
          navigation={navigation}
          editType={true}
          data={list}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </View>
      <View style={styles.listButton}>
        {list.map((_, index) => (
          <View
            key={index}
            style={[
              styles.circle,
              currentIndex === index
                ? styles.activeCircle
                : styles.inactiveCircle,
            ]}
          />
        ))}
      </View>
      <View style={styles.plusWrap}>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditBookCollection")}
          style={styles.plusButton}
        >
          <PlusIcon width={28.8} height={28.8} color={Color.Contents.Icon} />
        </TouchableOpacity>
      </View>
      <EditModal
        visible={isEditModalVisible}
        text={"변경된 편집 사항이 없습니다.\n편집을 완료하겠습니까?"}
        rightText="완료"
        onClose={() => setEditModalVisible(false)}
        onComplate={() => navigation.navigate("Library")}
      />
    </View>
  );
};

export default EditBookPage;
