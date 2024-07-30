import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { styles } from "../../styles/detail/NotePageStyle";
import NoteHeader from "../../components/header/NoteHeader";
import TitleDesModal from "../../components/modal/TitleDesModal";

const NotePage = ({ navigation }: { navigation: any }) => {
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  return (
    <View style={styles.container}>
      <NoteHeader
        navigation={navigation}
        onDelete={() => setIsDeleteModal(!isDeleteModal)}
      />
      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.dateText}>2024년 2월 12일</Text>
          <Text style={styles.titleText}>몰입이란 몰까....</Text>
          <Text style={styles.contentText}>내용</Text>
        </ScrollView>
      </View>
      {isDeleteModal && (
        <TitleDesModal
          titleText="삭제하기"
          desText={"해당 기록이 삭제됩니다\n이 동작은 취소할 수 없습니다."}
          onComplate={() => setIsDeleteModal(!isDeleteModal)}
          onClose={() => setIsDeleteModal(!isDeleteModal)}
        />
      )}
    </View>
  );
};

export default NotePage;
