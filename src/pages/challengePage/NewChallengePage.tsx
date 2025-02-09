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
import {
  calculateDaysDifference,
  formatDateToString,
  getDayOfWeek,
} from "../../utils/calendarUtils";
import { patchImage } from "../../api/challenge/patchImage";
import { patchEditChallenge } from "../../api/challenge/patchEditChallenge";
import CalenderSelectModal from "../../components/modal/CalenderSelectModal";
import AddParticipantModal from "../../components/modal/AddParticipantModal";
import { postChallenge } from "../../api/challenge/postChallenge";

export default function NewChallengePage({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const convertToPeriodFormat = (time: string) => {
    const [hour, minute] = time.split(":");
    const hourInt = parseInt(hour, 10);
    const ampm = hourInt >= 12 ? "PM" : "AM";
    const formattedHour = hourInt % 12 === 0 ? 12 : hourInt % 12;
    return {
      hour: String(formattedHour).padStart(2, "0"),
      minute,
      ampm,
    };
  };

  const convertTo24HourFormat = (time: TTime) => {
    let hour = parseInt(time.hour);
    if (time.ampm === "PM" && hour !== 12) {
      hour += 12;
    } else if (time.ampm === "AM" && hour === 12) {
      hour = 0;
    }

    return `${hour.toString().padStart(2, "0")}:${time.minute}`;
  };

  const { isNew, detail } = route.params;
  const todayDate = formatDateToString(new Date()); //오늘 날짜
  const [title, setTitle] = useState(isNew ? "" : detail.title); //챌린지 이름
  const [imageUri, setImageUri] = useState<string>(
    isNew ? "" : detail.challengeCover
  ); //챌린지 이미지
  const [isImageModal, setIsImageModal] = useState(false); //이미지 모달
  const [startDate, setStartDate] = useState<string>(
    isNew ? todayDate : detail.startDate
  ); // 시작일
  const [endDate, setEndDate] = useState<string>(
    isNew ? todayDate : detail.endDate
  ); // 종료일
  const [isCalenderModal, setIsCalenderModal] = useState(false); //캘린더 모달
  const [isCheck, setIsCheck] = useState(
    isNew ? false : detail.dailyStartTime === null
  ); // 독서 시간 설정 안 함
  const [startPeriod, setStartPeriod] = useState<TTime>(
    isNew || detail.dailyStartTime === null
      ? { hour: "01", minute: "00", ampm: "AM" }
      : convertToPeriodFormat(detail.dailyStartTime)
  ); // 시작 시간 설정
  const [endPeriod, setEndPeriod] = useState<TTime>(
    isNew || detail.dailyEndTime === null
      ? { hour: "01", minute: "00", ampm: "AM" }
      : convertToPeriodFormat(detail.dailyEndTime)
  ); // 종료 시간 설정
  const [goalTime, setGoalTime] = useState<TTime>(
    isNew
      ? { hour: "00", minute: "00" }
      : {
          hour: String(Math.floor(detail.dailyGoal / 60)).padStart(2, "0"),
          minute: String(detail.dailyGoal % 60).padStart(2, "0"),
        }
  ); // 하루 목표 시간량 설정
  const [isPickerModal, setIsPickerModal] = useState(false); //picker 모달
  const [pickerType, setPickerType] = useState<"START" | "END" | "GOAL" | null>(
    null
  ); //picker 타입
  const [selectedParticipant, setSelectedParticipant] = useState<number[]>(
    isNew
      ? []
      : detail.participants?.map(
          (data: { participantId: number }) => data.participantId
        )
  ); // 선택된 참여자
  const [isParticipantModal, setIsParticipantModal] = useState(false); //친구 선택 모달

  //이미지 핸들러
  const handleImagePress = () => setIsImageModal(true);
  const handleImagePicked = (uri: string) => setImageUri(uri);

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

  const handleAccept = async () => {
    try {
      const fileName = imageUri.split("/").pop() || "image.jpg";
      const type = `image/${fileName.split(".").pop()}` || "image/jpeg";

      const formData = new FormData();
      formData.append("challengeCover", {
        uri: imageUri,
        name: fileName,
        type,
      } as unknown as Blob);

      const data = {
        title,
        startDate,
        endDate,
        dailyGoal: parseInt(goalTime.hour) * 60 + parseInt(goalTime.minute),
        startTime: isCheck ? null : convertTo24HourFormat(startPeriod),
        endTime: isCheck ? null : convertTo24HourFormat(endPeriod),
      };

      if (isNew) {
        formData.append(
          "challengeCreateReq",
          new Blob([JSON.stringify(data)], { type: "application/json" })
        );

        const newRes = await postChallenge(formData);
        //에러 수정 필요
      } else {
        if (!imageUri.includes("https://")) {
          const imageRes = await patchImage(detail.challengeId, formData);
          if (!imageRes?.check) return;
        }

        const detailData = {
          title: detail.title,
          startDate: detail.startDate,
          endDate: detail.endDate,
          dailyGoal: detail.dailyGoal,
          startTime:
            detail.dailyStartTime !== null
              ? detail.dailyStartTime.slice(0, -3)
              : null,
          endTime:
            detail.dailyStartTime !== null
              ? detail.dailyEndTime.slice(0, -3)
              : null,
        };

        if (data !== detailData) {
          const editRes = await patchEditChallenge(detail.challengeId, data);
          if (!editRes?.check) return;
        }

        navigation.navigate("Challenge");
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 50 }}></View>
      <BackHeader title={isNew ? "챌린지 생성" : "챌린지 수정"} />
      <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <Pressable style={styles.imageBtnWrap} onPress={handleImagePress}>
            <Text style={styles.imageBtnText}>커버 변경</Text>
          </Pressable>
          {imageUri ? (
            <Image
              source={{
                uri: imageUri,
              }}
              style={styles.image}
            />
          ) : (
            <View
              style={[
                styles.image,
                !imageUri && { backgroundColor: "#FFE870" },
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
          <Pressable
            style={styles.periodWrap}
            onPress={() => setIsCalenderModal(true)}
          >
            <View style={styles.periodDateWrap}>
              <Text style={styles.periodHeadText}>시작일</Text>
              <Text style={styles.periodDateText}>
                {startDate.replaceAll("-", ".")} ({getDayOfWeek(startDate)})
              </Text>
            </View>
            <Text style={styles.periodHeadText}>
              {startDate && endDate
                ? `${calculateDaysDifference(startDate, endDate)}일`
                : ""}
            </Text>
            <View style={styles.periodDateWrap}>
              <Text style={styles.periodHeadText}>종료일</Text>
              <Text style={styles.periodDateText}>
                {endDate.replaceAll("-", ".")} ({getDayOfWeek(endDate)})
              </Text>
            </View>
          </Pressable>
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
              if (!isCheck) {
                setPickerType("START");
                setIsPickerModal(true);
              }
            }}
          />
          <TimeSetting
            label="종료 시간"
            time={endPeriod}
            onPress={() => {
              if (!isCheck) {
                setPickerType("END");
                setIsPickerModal(true);
              }
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
            onPress={() => setIsParticipantModal(true)}
          >
            <Text style={styles.friendBtnText}>친구 초대하기</Text>
          </Pressable>
        </View>
      </ScrollView>
      <BottomOneButton
        handleAccept={handleAccept}
        text={isNew ? "생성하기" : "수정하기"}
        disabled={!title}
      />
      <ImagePickerModal
        visible={isImageModal}
        onClose={() => setIsImageModal(false)}
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
      <CalenderSelectModal
        visible={isCalenderModal}
        onClose={() => setIsCalenderModal(false)}
        onComplate={(editStartDate, editEndDate) => {
          setStartDate(editStartDate);
          setEndDate(editEndDate);
          setIsCalenderModal(false);
        }}
        startDate={startDate}
        endDate={endDate}
      />
      <AddParticipantModal
        visible={isParticipantModal}
        onClose={() => setIsParticipantModal(false)}
        onComplate={(editParticipant) => {
          setSelectedParticipant(editParticipant);
          setIsParticipantModal(false);
        }}
        selectedParticipant={selectedParticipant}
        isNew={true}
      />
    </View>
  );
}
