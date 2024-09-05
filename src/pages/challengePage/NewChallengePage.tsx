import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { styles } from "../../styles/challenge/NewChallengePageStyle";
import BackHeader from "../../components/header/BackHeader";
import { Color } from "../../styles/Theme";
import ImagePickerModal from "../../components/modal/ImageModal";
import CheckBoxCheckIcon from "../../assets/images/challange/CheckBoxCheck.svg";
import CheckBoxDefaultIcon from "../../assets/images/challange/CheckBoxDefault.svg";
import BottomOneButton from "../../components/bottomSheet/BottomOneButton";
import TimePickerModal from "../../components/modal/TimePickerModal";
import { TTime } from "../../types/challenge";
import {
  calculateDaysDifference,
  formatDateToString,
  getDayOfWeek,
} from "../../utils/calendarUtils";
import { dummyListCard } from "../../assets/data/dummyChallengeList";

export default function NewChallengePage({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { isNew } = route.params;
  const todayDate = formatDateToString(new Date()); //오늘 날짜
  const [title, setTitle] = useState(isNew ? "" : dummyListCard.title); //챌린지 이름
  const [imageUri, setImageUri] = useState<string | null>(
    isNew ? null : dummyListCard.image
  ); //챌린지 이미지
  const [isImagemodal, setIsImagemodal] = useState(false); //이미지 모달
  const [startDate, setStartDate] = useState<string>(
    isNew ? todayDate : dummyListCard.startDate
  ); // 시작일
  const [endDate, setEndDate] = useState<string>(
    isNew ? todayDate : dummyListCard.endDate
  ); // 종료일
  const [isCheck, setIsCheck] = useState(isNew ? false : dummyListCard.isCheck); // 독서 시간 설정 안 함
  const [startPeriod, setStartPeriod] = useState<TTime>(
    isNew ? { hour: "01", minute: "00", ampm: "AM" } : dummyListCard.startPeriod
  ); // 시작 시간 설정
  const [endPeriod, setEndPeriod] = useState<TTime>(
    isNew ? { hour: "01", minute: "00", ampm: "AM" } : dummyListCard.endPeriod
  ); // 종료 시간 설정
  const [goalTime, setGoalTime] = useState<TTime>(
    isNew ? { hour: "00", minute: "00" } : dummyListCard.goalTime
  ); // 하루 목표 시간량 설정
  const [isPickerModal, setIsPickerModal] = useState(false); //picker 모달
  const [pickerType, setPickerType] = useState<"START" | "END" | "GOAL" | null>(
    null
  ); //picker 타입
  const [selectedParticipant, setSelectedParticipant] = useState<number[]>(
    isNew ? [] : dummyListCard.selectedParticipant
  ); // 선택된 참여자

  useEffect(() => {
    if (route.params?.updatedStartDate) {
      setStartDate(route.params.updatedStartDate);
    }
    if (route.params?.updatedEndDate) {
      setEndDate(route.params.updatedEndDate);
    }
    if (route.params?.updatedSelectedParticipant) {
      setSelectedParticipant(route.params.updatedSelectedParticipant);
    }
  }, [route.params]);

  //이미지 핸들러
  const handleImagePress = () => setIsImagemodal(true);
  const handleImagePicked = (uri: string | null) => setImageUri(uri);

  //시간 피커 핸들러
  const handleTimePickerComplete = (
    type: "START" | "END" | "GOAL",
    time: TTime
  ) => {
    const updater = {
      START: setStartPeriod,
      END: setEndPeriod,
      GOAL: setGoalTime,
    };
    updater[type](time);
    setIsPickerModal(false);
  };

  //시간 텍스트 형식 변환
  const formatTimeText = (time: TTime) =>
    `${time.hour} : ${time.minute} ${time.ampm}`
      .split(" ")
      .map((char, index) => (
        <Text key={index} style={styles.itemText}>
          {char}
        </Text>
      ));

  //시간 설정 컴포넌트
  const TimeSetting = ({
    label,
    time,
    onPress,
  }: {
    label: string;
    time: TTime;
    onPress: () => void;
  }) => (
    <View>
      <Text style={styles.readTimeText}>{label}</Text>
      <Pressable style={styles.readTimeWrap} onPress={onPress}>
        <View style={styles.itemTextContainer}>{formatTimeText(time)}</View>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <BackHeader title={isNew ? "챌린지 생성" : "챌린지 수정"} />
      <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <Pressable style={styles.imageBtnWrap} onPress={handleImagePress}>
            <Text style={styles.imageBtnText}>커버 변경</Text>
          </Pressable>
          <Image
            source={imageUri ? { uri: imageUri } : undefined}
            style={[styles.image, !imageUri && { backgroundColor: "#FFE870" }]}
          />
        </View>
        <View style={styles.headWrap}>
          <TextInput
            style={styles.titleText}
            placeholder="챌린지 이름을 지정해주세요."
            value={title}
            onChangeText={setTitle}
            placeholderTextColor={Color.Typo.Tertiary}
          />
        </View>
        <View style={styles.itemWrap}>
          <Text style={styles.headText}>기간 설정</Text>
          <View style={styles.periodWrap}>
            <Pressable
              style={styles.periodDateWrap}
              onPress={() =>
                navigation.navigate("CalenderSelect", {
                  currentStartDate: startDate,
                  currentEndDate: endDate,
                })
              }
            >
              <Text style={styles.periodHeadText}>시작일</Text>
              <Text style={styles.periodDateText}>
                {startDate.replaceAll("-", ".")} ({getDayOfWeek(startDate)})
              </Text>
            </Pressable>
            <Text style={styles.periodHeadText}>
              {startDate && endDate
                ? `${calculateDaysDifference(startDate, endDate)}일`
                : ""}
            </Text>
            <Pressable
              style={styles.periodDateWrap}
              onPress={() =>
                navigation.navigate("CalenderSelect", {
                  currentStartDate: startDate,
                  currentEndDate: endDate,
                })
              }
            >
              <Text style={styles.periodHeadText}>종료일</Text>
              <Text style={styles.periodDateText}>
                {endDate.replaceAll("-", ".")} ({getDayOfWeek(endDate)})
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.itemWrap}>
          <View style={styles.readTimeHeadWrap}>
            <Text style={styles.headText}>독서 시간 설정</Text>
            <Pressable
              style={styles.checkWrap}
              onPress={() => setIsCheck(!isCheck)}
            >
              <Text style={styles.headText}>설정 안 함</Text>
              {isCheck ? <CheckBoxCheckIcon /> : <CheckBoxDefaultIcon />}
            </Pressable>
          </View>
          <TimeSetting
            label="시작 시간"
            time={startPeriod}
            onPress={() => {
              setPickerType("START");
              setIsPickerModal(true);
            }}
          />
          <TimeSetting
            label="종료 시간"
            time={endPeriod}
            onPress={() => {
              setPickerType("END");
              setIsPickerModal(true);
            }}
          />
        </View>
        <View style={styles.itemWrap}>
          <Text style={styles.headText}>하루 목표 시간량 설정</Text>
          <Pressable
            style={styles.readTimeWrap}
            onPress={() => {
              setPickerType("GOAL");
              setIsPickerModal(true);
            }}
          >
            <View style={styles.itemGoalContainer}>
              <Text style={styles.itemText}>{goalTime.hour}</Text>
              <Text
                style={[styles.itemText, { marginLeft: 28, marginRight: 44 }]}
              >
                H
              </Text>
              <Text style={styles.itemText}>:</Text>
              <Text
                style={[styles.itemText, { marginLeft: 44, marginRight: 28 }]}
              >
                {goalTime.minute}
              </Text>
              <Text style={styles.itemText}>M</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.itemWrap}>
          <Text style={styles.headText}>친구와 함께하기</Text>
          <Pressable
            style={styles.friendBtnWrap}
            onPress={() =>
              navigation.navigate("AddParticipant", {
                currentSelectedParticipant: selectedParticipant,
              })
            }
          >
            <Text style={styles.friendBtnText}>친구 초대하기</Text>
          </Pressable>
        </View>
      </ScrollView>
      <BottomOneButton
        handleAccept={() => console.log(isNew ? "생성하기" : "수정하기")}
        text={isNew ? "생성하기" : "수정하기"}
        disabled={!title}
      />
      <ImagePickerModal
        visible={isImagemodal}
        onClose={() => setIsImagemodal(false)}
        onImagePicked={handleImagePicked}
      />
      <TimePickerModal
        visible={isPickerModal}
        text={
          pickerType === "START"
            ? "시작 시간"
            : pickerType === "END"
            ? "종료 시간"
            : "하루 목표 시간량"
        }
        type={pickerType!}
        initValue={
          pickerType === "START"
            ? startPeriod
            : pickerType === "END"
            ? endPeriod
            : goalTime
        }
        onClose={() => setIsPickerModal(false)}
        onComplate={handleTimePickerComplete}
      />
    </View>
  );
}
