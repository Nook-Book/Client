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
import CustomWheelPicker from "../../components/challenge/CustomWheelPicker";

export default function NewChallengePage({ navigation }: { navigation: any }) {
  const [title, setTitle] = useState("");
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [startPeriod, setStartPeriod] = useState({
    hour: "01",
    minute: "00",
    amPm: "AM",
  });
  const [endPeriod, setEndPeriod] = useState({
    hour: "01",
    minute: "00",
    amPm: "AM",
  });

  const handleImagePress = () => {
    setModalVisible(true);
  };

  const handleImagePicked = (uri: string | null) => {
    setImageUri(uri);
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
          <CustomWheelPicker
            title="시작 시간"
            period={startPeriod}
            setPeriod={setStartPeriod}
          />
          <CustomWheelPicker
            title="종료 시간"
            period={endPeriod}
            setPeriod={setEndPeriod}
          />
        </View>
        <View style={styles.itemWrap}>
          <Text style={styles.headText}>목표 시간량 설정</Text>
          <View>
            <Text>아아</Text>
          </View>
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
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onImagePicked={handleImagePicked}
      />
    </View>
  );
}
