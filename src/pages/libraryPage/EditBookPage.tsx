import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles/library/EditBookPageStyle";
import EditHeader from "../../components/header/EditHeader";
import BookList from "../../components/libary/BookList";
import { dummyList } from "../../assets/data/dummyBookCarouseList";
import { useState } from "react";
import PlusIcon from "../../assets/images/icon/Plus.svg";
import { Color } from "../../styles/Theme";

const EditBookPage = ({ navigation }: { navigation: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <EditHeader
        navigation={navigation}
        onComplete={() => navigation.navigate("Library")}
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
          onPress={() => navigation.navigate("EditBookCollection")}
          style={styles.plusButton}
        >
          <PlusIcon width={28.8} height={28.8} color={Color.Contents.Icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditBookPage;
