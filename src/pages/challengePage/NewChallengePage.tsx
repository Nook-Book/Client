import React, { useState } from "react";
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

export default function NewChallengePage({ navigation }: { navigation: any }) {
  const [title, setTitle] = useState(""); //챌린지 이름
  const [imageUri, setImageUri] = useState<string | null>(null); //챌린지 이미지
  const [isImagemodal, setIsImagemodal] = useState(false); //이미지 모달
  const [isCheck, setIsCheck] = useState(false); //독서 시간 설정 안 함 true
  const [startPeriod, setStartPeriod] = useState<TTime>({
    hour: "01",
    minute: "00",
    ampm: "AM",
  }); //시작 시간 설정
  const [endPeriod, setEndPeriod] = useState<TTime>({
    hour: "01",
    minute: "00",
    ampm: "AM",
  }); //종료 시간 설정
  const [goalTime, setGoalTime] = useState<TTime>({
    hour: "00",
    minute: "00",
  }); //목표 시간량 설정
  const [isPickerModal, setIsPickerModal] = useState(false); //picker 모달
  const [pickerType, setPickerType] = useState<"START" | "END" | "GOAL" | null>(
    null
  ); //picker 타입

  const handleImagePress = () => {
    setIsImagemodal(true);
  };

  const handleImagePicked = (uri: string | null) => {
    setImageUri(uri);
  };

  const handleTimePickerComplete = (
    type: "START" | "END" | "GOAL",
    time: TTime
  ) => {
    if (type === "START") {
      setStartPeriod({
        hour: time.hour,
        minute: time.minute,
        ampm: time.ampm,
      });
    } else if (type === "END") {
      setEndPeriod({
        hour: time.hour,
        minute: time.minute,
        ampm: time.ampm,
      });
    } else if (type === "GOAL") {
      setGoalTime({
        hour: time.hour,
        minute: time.minute,
      });
    }
    setIsPickerModal(false);
  };

  return (
    <View style={styles.container}>
      <BackHeader title="챌린지 생성" />
      <ScrollView scrollEventThrottle={16}>
        <View style={styles.contentContainer}>
          <Pressable style={styles.imageBtnWrap} onPress={handleImagePress}>
            <Text style={styles.imageBtnText}>커버 변경</Text>
          </Pressable>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.image} />
          ) : (
            <View
              style={[
                styles.image,
                {
                  backgroundColor: "#FFE870",
                },
              ]}
            ></View>
          )}
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
            <Pressable style={styles.periodDateWrap}>
              <Text style={styles.periodHeadText}>시작일</Text>
              <Text style={styles.periodDateText}>2024.3.2 (일)</Text>
            </Pressable>
            <Text style={styles.periodHeadText}>24일</Text>
            <Pressable style={styles.periodDateWrap}>
              <Text style={styles.periodHeadText}>종료일</Text>
              <Text style={styles.periodDateText}>2024.3.25 (일)</Text>
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
          <View>
            <Text style={styles.readTimeText}>시작 시간</Text>
            <Pressable
              style={styles.readTimeWrap}
              onPress={() => {
                setPickerType("START");
                setIsPickerModal(true);
              }}
            >
              <View style={styles.itemTextContainer}>
                {`${startPeriod.hour} : ${startPeriod.minute} ${startPeriod.ampm}`
                  .split(" ")
                  .map((char, index) => (
                    <Text key={index} style={styles.itemText}>
                      {char}
                    </Text>
                  ))}
              </View>
            </Pressable>
          </View>
          <View>
            <Text style={styles.readTimeText}>종료 시간</Text>
            <Pressable
              style={styles.readTimeWrap}
              onPress={() => {
                setPickerType("END");
                setIsPickerModal(true);
              }}
            >
              <View style={styles.itemTextContainer}>
                {`${endPeriod.hour} : ${endPeriod.minute} ${endPeriod.ampm}`
                  .split(" ")
                  .map((char, index) => (
                    <Text key={index} style={styles.itemText}>
                      {char}
                    </Text>
                  ))}
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.itemWrap}>
          <Text style={styles.headText}>목표 시간량 설정</Text>
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
          <Pressable style={styles.friendBtnWrap}>
            <Text style={styles.friendBtnText}>친구 초대하기</Text>
          </Pressable>
        </View>
      </ScrollView>
      <BottomOneButton
        handleAccept={() => console.log("생성하기")}
        text="생성하기"
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
            : "목표 시간량 설정"
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
