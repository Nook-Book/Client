import { useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { styles } from "../../styles/bottomSheet/BottomSheetStyle";
import BottomSheetItem from "./BottomSheetItem";
import BottomSheetTitle from "./BottomSheetTitle";
import PlusIcon from "../../assets/images/icon/Plus.svg";
import { dummyList } from "../../assets/data/dummyBookCarouseList";
import InputModal from "../modal/InputModal";

const CollectionBottomSheet = ({ onClose }: { onClose: () => void }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {isModalVisible && (
        <View style={styles.modal}>
          <InputModal
            onClose={() => setIsModalVisible(!isModalVisible)}
            onComplate={() => {
              setIsModalVisible(!isModalVisible);
              console.log("생성하기");
            }}
          />
        </View>
      )}
      <View style={styles.bottom}>
        <BottomSheetTitle text="컬렉션 선택" onClose={onClose} />
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
          {dummyList.map((data, index) => {
            return (
              <BottomSheetItem
                key={index}
                Icon={
                  <Image
                    source={data.dummyBook[0].image}
                    style={styles.thumbnailImage}
                  />
                }
                leftText={data.title}
                rightText={"(" + data.dummyBook.length + "권)"}
                onPress={onClose} //컬렉션에 저장되도록 수정 필요
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default CollectionBottomSheet;
