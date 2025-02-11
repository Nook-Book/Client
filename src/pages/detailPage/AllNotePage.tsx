import React, { useCallback, useState } from "react";
import { ScrollView, View, Text, Image, Pressable } from "react-native";
import { styles } from "../../styles/detail/AllNotePageStyle";
import AllNoteHeader from "../../components/header/AllNoteHeader";
import { Color } from "../../styles/Theme";
import NotePencelIcon from "../../assets/images/icon/NotePencel.svg";
import { useFocusEffect } from "@react-navigation/native";
import { getNoteList } from "../../api/note/getNoteList";
import { TNoteListInformationRes } from "../../types/note";

const AllNotePage = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const bookId = route?.params?.bookId;
  const [noteList, setNoteList] = useState<TNoteListInformationRes>();

  const fetchNoteList = async () => {
    try {
      const response = await getNoteList(bookId);
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
          navigation.navigate("Write", { bookId: bookId, isFirst: false })
        }
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
                  navigation.navigate("Note", { noteId: data.noteId })
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
    </View>
  );
};

export default AllNotePage;
