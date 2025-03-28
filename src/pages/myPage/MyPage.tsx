import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ReportIcon from "../../assets/images/icon/AllNotes.svg";
import CalendarIcon from "../../assets/images/icon/CalenderIcon.svg";
import CollectionIcon from "../../assets/images/icon/Colletion.svg";
import Bookstatistics from "../../components/myPage/Bookstatistics";
import CategoryReport from "../../components/myPage/CategoryReport";
import MyPageNav from "../../components/myPage/MyPageNav";
import Profile from "../../components/myPage/Profile";
import { styles } from "../../styles/myPage/MyPageStyle";
import { NavigationProp } from "../../types/search";

export default function MyPage() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView>
        <MyPageNav />
        <Profile />
        <View style={styles.readingActivityContainer}>
          <View style={styles.HeaderContainer}>
            <Text style={styles.activityHeader}>독서활동</Text>
          </View>
          <View style={styles.linkIconContainer}>
            <TouchableOpacity
              style={styles.linkIconContainerComponent}
              onPress={() => navigation.navigate("MyCollectionPage")}
            >
              <CollectionIcon />
              <Text style={styles.linkIconContainerComponentText}>
                컬렉션 전체 보기
              </Text>
            </TouchableOpacity>
            <View style={styles.linkIconBorder} />
            <TouchableOpacity
              style={styles.linkIconContainerComponent}
              onPress={() => navigation.navigate("MyReportPage")}
            >
              <ReportIcon />
              <Text style={styles.linkIconContainerComponentText}>
                기록 전체 보기
              </Text>
            </TouchableOpacity>
            <View style={styles.linkIconBorder} />
            <TouchableOpacity
              style={styles.linkIconContainerComponent}
              onPress={() => navigation.navigate("CalendarPage")}
            >
              <CalendarIcon />
              <Text style={styles.linkIconContainerComponentText}>
                독서 캘린더
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.linkActivityContainer}>
          <View style={styles.HeaderContainer}>
            <Text style={styles.activityHeader}>독서 리포트</Text>
          </View>
          <View style={styles.HeaderContainer}>
            <Text style={styles.categoryHeader}>많이 읽은 카테고리</Text>
          </View>
          <CategoryReport />
          <View style={styles.HeaderContainer}>
            <Text style={styles.categoryHeader}>독서 통계</Text>
          </View>
          <Bookstatistics />
        </View>
      </ScrollView>
    </View>
  );
}
