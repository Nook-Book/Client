import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./EditBookPageStyle";
import EditHeader from "../../components/header/EditHeader";
import BookList from "../../components/libary/BookList";
import { dummyList } from "../../assets/data/dummyBookCarouseList";
import { useState } from "react";
import PlusIcon from "../../assets/images/icon/Plus.svg";
import EditModal from "../../components/modal/EditModal";

const EditBookPage = ({ navigation }: { navigation: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false); //변경된 사항이 있는지(있으면 : true, 없으면 : false)

  return (
    <View style={styles.container}>
      <EditHeader
        navigation={navigation}
        onComplete={() => {
          if (isEdit) {
            navigation.navigate("Library");
          } else {
            setModalVisible(true);
          }
        }}
      />
      <Text style={styles.numText}>{currentIndex + 1}번째</Text>
      <View style={styles.listWrap}>
        <BookList
          navigation={navigation}
          editType={true}
          data={dummyList}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </View>
      <View style={styles.listButton}>
        {dummyList.map((_, index) => (
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
          onPress={() => navigation.navigate("Library")}
          style={styles.plusButton}
        >
          <PlusIcon width={28.8} height={28.8} />
        </TouchableOpacity>
      </View>
      {isModalVisible && (
        <EditModal
          text={"변경된 편집 사항이 없습니다.\n편집을 완료하겠습니까?"}
          onClose={() => setModalVisible(false)}
          onComplate={() => navigation.navigate("Library")}
        />
      )}
    </View>
  );
};

export default EditBookPage;
