import React, { useState } from "react";
import {
  View,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
  Text,
} from "react-native";
import { styles } from "../../styles/challenge/ChallengeDetailPageStyle";
import BackSettingHeader from "../../components/header/BackSettingHeader";

export default function ChallengeDetailPage({
  navigation,
}: {
  navigation: any;
}) {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [profileItemWidths, setProfileItemWidths] = useState<number[]>([]);

  const dummyProfileList = [
    {
      id: 1,
      image: require("../../assets/images/dummy/book/1.png"),
      name: "피쉬벅",
    },
    {
      id: 2,
      image: require("../../assets/images/dummy/book/2.png"),
      name: "야옹아멍멍해바",
    },
    {
      id: 3,
      image: require("../../assets/images/dummy/book/3.png"),
      name: "두부",
    },
    {
      id: 4,
      image: require("../../assets/images/dummy/book/4.png"),
      name: "독서두기무라타쿠야",
    },
    {
      id: 5,
      image: require("../../assets/images/dummy/book/5.png"),
      name: "Youyoung",
    },
  ];

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const threshold = 278;
    setIsTitleVisible(scrollY > threshold);
  };

  const ProfileItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <View
        key={index}
        style={styles.profileItem}
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout;
          setProfileItemWidths((prevWidths) => {
            const newWidths = [...prevWidths];
            newWidths[index] = width;
            return newWidths;
          });
        }}
      >
        <Image source={item.image} style={styles.profileImage} />
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    );
  };

  console.log(profileItemWidths);

  return (
    <View style={styles.container}>
      <BackSettingHeader
        title="미라클 모닝 독서 가즈앗"
        isTitleVisible={isTitleVisible}
        navigation={navigation}
      />
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        <View style={styles.contentContainer}>
          <Image
            source={require("../../assets/images/dummy/book/1.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.headWrap}>
          <Text style={styles.headText} numberOfLines={1}>
            미라클 모닝 독서 가즈앗미라클 모닝 독서 가즈앗
          </Text>
          <View style={styles.endWrap}>
            <Text style={styles.endText}>{isEnd ? "종료" : "진행중"}</Text>
          </View>
        </View>
        <View style={styles.profileItemWrap}>
          <View style={styles.leftWrap}>
            <Text style={styles.leftText}>참여자</Text>
          </View>
          <View style={styles.rightWrap}>
            <View style={styles.profileWrap}>
              {dummyProfileList.map((data, index) => {
                return ProfileItem({ item: data, index });
              })}
            </View>
            <View style={styles.profileWrap}>
              {dummyProfileList.map((data, index) => {
                return ProfileItem({ item: data, index });
              })}
            </View>
            <View style={styles.profileWrap}>
              {dummyProfileList.map((data, index) => {
                return ProfileItem({ item: data, index });
              })}
            </View>
          </View>
          <View style={styles.lengthWrap}>
            <Text style={styles.lengthText}>외 2명</Text>
          </View>
        </View>
        <View style={styles.itemWrap}>
          <Text style={styles.leftText}>기간</Text>
          <Text style={styles.itemText}>2024.3.2 (일) ~ 2024.3.25 (일)</Text>
        </View>
        <View style={styles.itemWrap}>
          <Text style={styles.leftText}>목표 시간</Text>
          <Text style={styles.itemLightText}>
            총<Text style={styles.itemBoldText}> 16시간</Text> / 하루
            <Text style={styles.itemBoldText}> 40분</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
