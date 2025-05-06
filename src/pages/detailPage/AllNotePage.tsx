import React, { useCallback, useState } from "react";
import { ScrollView, View, Text, Image, Pressable } from "react-native";
import { styles } from "../../styles/detail/AllNotePageStyle";
import AllNoteHeader from "../../components/header/AllNoteHeader";
import { Color } from "../../styles/Theme";
import NotePencelIcon from "../../assets/images/icon/NotePencel.svg";
import { useFocusEffect } from "@react-navigation/native";
import { TNoteListInformationRes } from "../../types/note";
import MaxCollectionModal from "../../components/modal/MaxCollectionModal";
import { getFriendNoteList } from "../../api/friend/getFriendNoteList";
import { getNoteList } from "../../api/note/getNoteList";

const AllNotePage = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { bookId, userId } = route.params;
  const [noteList, setNoteList] = useState<TNoteListInformationRes>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const fetchNoteList = async () => {
    let response;

    try {
      if (userId) response = await getFriendNoteList(userId, bookId);
      else response = await getNoteList(bookId);
      if (response?.check) {
        setNoteList(response.information);
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchNoteList();
    }, [])
  );

  return (
    <View style={styles.container}>
      <AllNoteHeader
        navigation={navigation}
        onWritePress={() =>
          (noteList?.noteListRes?.length || 0) >= 10
            ? setIsModalVisible(true)
            : navigation.navigate("Write", { bookId: bookId })
        }
        isCurrentUser={!userId}
      />
      <View style={styles.contentContainer}>
        <View style={styles.bookWrap}>
          <Image
            source={{ uri: noteList?.bookImage }}
            style={styles.bookImage}
          />
          <Text style={styles.bookText}>{noteList?.bookTitle}</Text>
        </View>
        <Text style={styles.lengthText}>
          전체{" "}
          <Text style={{ color: Color.Typo.Primary }}>
            {noteList?.noteCount}
          </Text>
          개
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {noteList?.noteListRes.map((data, index) => {
            return (
              <Pressable
                key={index}
                style={styles.noteWrap}
                onPress={() =>
                  navigation.navigate("Note", {
                    noteId: data.noteId,
                    isCurrentUser: !userId,
                  })
                }
              >
                <View style={styles.titleWrap}>
                  <NotePencelIcon />
                  <Text style={styles.titleText} numberOfLines={1}>
                    {data.title}
                  </Text>
                </View>
                <Text style={styles.dateText}>
                  {data.createdDate.replaceAll("-", ".")}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
      <MaxCollectionModal
        visible={isModalVisible}
        text="최대 기록 가능한 개수는 10개입니다."
        onClose={() => setIsModalVisible(false)}
      />
    </View>
  );
};

export default AllNotePage;
