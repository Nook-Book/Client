import { useCallback, useEffect, useState } from "react";
import {
  View,
  Image,
  ScrollView,
  Keyboard,
  useWindowDimensions,
} from "react-native";
import { styles } from "../../styles/bottomSheet/BottomSheetStyle";
import BottomSheetItem from "./BottomSheetItem";
import BottomSheetTitle from "./BottomSheetTitle";
import PlusIcon from "../../assets/images/icon/Plus.svg";
import InputModal from "../modal/InputModal";
import { getList } from "../../api/collection/getList";
import { useFocusEffect } from "@react-navigation/native";
import { TCollectionListDetailRes } from "../../types/library";
import { postNew } from "../../api/collection/postNew";

const CollectionBottomSheet = ({
  clickList,
  onClose,
  onComplete,
  onPress,
}: {
  clickList: number[];
  onClose: () => void;
  onComplete: () => void;
  onPress: (id: number) => void;
}) => {
  const { height: windowHeight } = useWindowDimensions();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [list, setList] = useState<TCollectionListDetailRes[]>([]);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const fetchCollectionList = async () => {
    try {
      const response = await getList();
      if (response?.check) {
        setList(response.information.collectionListDetailRes);
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

  //새 컬렉션 생성
  const handleNewCollection = async (text: string) => {
    try {
      const response = await postNew(text);
      if (response.check) {
        fetchCollectionList();
        setIsModalVisible(!isModalVisible);
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  //키보드 상태 감지
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () =>
      setIsKeyboardVisible(true)
    );
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () =>
      setIsKeyboardVisible(false)
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {isModalVisible && (
        <View
          style={[
            styles.modal,
            {
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              marginTop: windowHeight / 3.1,
            },
          ]}
        >
          <InputModal
            onClose={() => setIsModalVisible(!isModalVisible)}
            onComplate={handleNewCollection}
            setIsKeyboardVisible={setIsKeyboardVisible}
          />
        </View>
      )}
      <View
        style={[
          styles.bottom,
          { display: isKeyboardVisible ? "none" : "flex" },
        ]}
      >
        <BottomSheetTitle
          text="컬렉션 선택"
          onClose={onClose}
          onComplete={onComplete}
        />
        <ScrollView style={{ height: 221 }}>
          <BottomSheetItem
            Icon={
              <View style={styles.plusWrap}>
                <PlusIcon style={styles.plusIcon} />
              </View>
            }
            leftText="새 컬렉션 생성하기"
            rightText=""
            onPress={() => setIsModalVisible(true)}
          />
          {list.map((data, index) => {
            return (
              <BottomSheetItem
                key={index}
                Icon={
                  <Image
                    source={{ uri: data.collectionBooksCoverList[0] }}
                    style={styles.thumbnailImage}
                  />
                }
                leftText={data.collectionTitle}
                rightText={`(${data.totalBooks}권)`}
                onPress={() => onPress(data.collectionId)}
                isClick={clickList.includes(data.collectionId)}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default CollectionBottomSheet;
