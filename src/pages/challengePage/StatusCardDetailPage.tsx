import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "../../styles/challenge/StatusCardDetailPageStyle";
import BackTitleHeader from "../../components/header/BackTitleHeader";

export default function StatusCardDetailPage({
  navigation,
}: {
  navigation: any;
}) {
  return (
    <View style={styles.container}>
      <BackTitleHeader
        navigation={navigation}
        title="피쉬벅"
        isTitleVisible={true}
      />
      <ScrollView scrollEventThrottle={16}>
        <Text style={styles.headText}>독서량 달력</Text>
        <View style={styles.calendarWrap}>
          <View style={styles.calendar}></View>
          <View style={styles.dateWrap}>
            <Text style={styles.dateText}>3월 4일 (월)</Text>
            <View>
              <Text style={styles.dateItemHeadText}>총 독서 시간</Text>
              <Text style={styles.dateItemText}>00 : 50 : 31</Text>
            </View>
            <View style={styles.dateItemWrap}>
              <View>
                <Text style={styles.dateItemHeadText}>시작 시간</Text>
                <Text style={styles.dateItemText}>09시 21분</Text>
              </View>
              <View>
                <Text style={styles.dateItemHeadText}>종료 시간</Text>
                <Text style={styles.dateItemText}>23시 12분</Text>
              </View>
            </View>
            <View>
              <Text style={styles.dateItemHeadText}>읽은 책</Text>
              <View style={styles.dateBookWrap}>
                <View style={styles.dateBookItemWrap}>
                  <View>
                    <Image
                      source={require("../../assets/images/dummy/book/2.png")}
                      style={styles.dateBookImage}
                    />
                  </View>
                  <Text style={styles.dateBookText}>
                    몰입 : 인생을 바꾸는 자기혁명
                  </Text>
                </View>
                <View style={styles.dateBookItemWrap}>
                  <View>
                    <Image
                      source={require("../../assets/images/dummy/book/2.png")}
                      style={styles.dateBookImage}
                    />
                  </View>
                  <Text style={styles.dateBookText}>
                    몰입 : 인생을 바꾸는 자기혁명 몰입 : 인생을 바꾸는dfsdfs
                    자기혁명몰입 : 인생을 바꾸는 자기혁명 몰입 : 인생을
                    바꾸sdfsdfdfsdfdf
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
