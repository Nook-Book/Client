import { useCallback, useState } from "react";
import { View, Image, ScrollView } from "react-native";
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [list, setList] = useState<TCollectionListDetailRes[]>([]);

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

  return (
    <View style={styles.container}>
      {isModalVisible && (
        <View style={styles.modal}>
          <InputModal
            onClose={() => setIsModalVisible(!isModalVisible)}
            onComplate={handleNewCollection}
          />
        </View>
      )}
      <View style={styles.bottom}>
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
                rightText={`(${data.collectionBooksCoverList.length}권)`}
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
