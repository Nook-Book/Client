import React from "react";
import { ScrollView, View, Text, Image, Pressable } from "react-native";
import { styles } from "../../styles/detail/AllNotePageStyle";
import AllNoteHeader from "../../components/header/AllNoteHeader";
import { Color } from "../../styles/Theme";
import { dummyList } from "../../assets/data/dummyNote";
import NotePencelIcon from "../../assets/images/icon/NotePencel.svg";

const AllNotePage = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <AllNoteHeader navigation={navigation} />
      <View style={styles.contentContainer}>
        <View style={styles.bookWrap}>
          <View style={styles.bookImage}>
            <Image source={require("../../assets/images/dummy/book/2.png")} />
          </View>
          <Text style={styles.bookText}>몰입 : 인생을 바꾸는 자기 혁명</Text>
        </View>
        <Text style={styles.lengthText}>
          전체 <Text style={{ color: Color.Typo.Primary }}>2</Text>개
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {dummyList.map((data, index) => {
            return (
              <Pressable
                key={index}
                style={styles.noteWrap}
                onPress={() => navigation.navigate("Note")}
              >
                <View style={styles.titleWrap}>
                  <NotePencelIcon />
                  <Text style={styles.titleText} numberOfLines={1}>
                    {data.title}
                  </Text>
                </View>
                <Text style={styles.dateText}>{data.date}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default AllNotePage;
