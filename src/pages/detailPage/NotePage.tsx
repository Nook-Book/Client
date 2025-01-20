import React, { useCallback, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { styles } from "../../styles/detail/NotePageStyle";
import NoteHeader from "../../components/header/NoteHeader";
import TitleDesModal from "../../components/modal/TitleDesModal";
import Markdown from "react-native-markdown-display";
import { markdownStyle } from "../../styles/markdown/MarkdownStyle";
import { RenderRules } from "../../styles/markdown/RenderRules";
import { getNoteDetail } from "../../api/note/getNoteDetail";
import { TNoteDetailInformationRes } from "../../types/note";
import { useFocusEffect } from "@react-navigation/native";

const NotePage = ({ navigation, route }: { navigation: any; route: any }) => {
  const noteId = route?.params?.noteId;
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [noteDetail, setNoteDetail] = useState<TNoteDetailInformationRes>();

  const fetchNoteDetail = async () => {
    try {
      const response = await getNoteDetail(noteId);
      if (response?.check) {
        setNoteDetail(response.information);
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchNoteDetail();
    }, [])
  );

  //날짜 형식 변환(년월일)
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "";

    const [year, month, day] = dateString.split("-");
    return `${parseInt(year)}년 ${parseInt(month)}월 ${parseInt(day)}일`;
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 50 }}></View>
      <NoteHeader
        navigation={navigation}
        onDelete={() => setIsDeleteModal(true)}
      />
      <View style={styles.contentContainer}>
        <ScrollView
          style={{ marginHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.dateText}>
            {formatDate(noteDetail?.createdDate)}
          </Text>
          <Text style={styles.titleText}>{noteDetail?.title}</Text>
          <Markdown style={markdownStyle} rules={RenderRules}>
            {String(noteDetail?.content)}
          </Markdown>
        </ScrollView>
      </View>
      <TitleDesModal
        visible={isDeleteModal}
        titleText="기록 삭제"
        desText={"해당 기록이 삭제됩니다\n이 동작은 취소할 수 없습니다."}
        onComplate={() => {
          navigation.goBack();
          setIsDeleteModal(false);
        }}
        onClose={() => setIsDeleteModal(false)}
      />
    </View>
  );
};

export default NotePage;
