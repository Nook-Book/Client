import React, { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Linking,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Animated,
  Easing,
} from "react-native";
import { styles } from "../../styles/detail/DetailPageStyle";
import BackShareHeader from "../../components/header/BackShareHeader";
import ReadDefaultIcon from "../../assets/images/icon/ReadDefault.svg";
import ReadIcon from "../../assets/images/icon/Read.svg";
import ColletionIcon from "../../assets/images/icon/Colletion.svg";
import ColletionClickIcon from "../../assets/images/icon/ColletionClick.svg";
import ColletionAniIcon from "../../assets/images/icon/ColletionAni.svg";
import NoteIcon from "../../assets/images/icon/Note.svg";
import TimerIcon from "../../assets/images/icon/Timer.svg";
import FoldItem from "../../components/detail/FoldItem";
import IconItem from "../../components/detail/IconItem";
import InfoItem from "../../components/detail/InfoItem";
import ShareBottomSheet from "../../components/bottomSheet/ShareBottomSheet";
import CollectionBottomSheet from "../../components/bottomSheet/CollectionBottomSheet";
import { dummyList } from "../../assets/data/dummyNote";

const DetailPage = ({ navigation }: { navigation: any }) => {
  const [isRead, setIsRead] = useState(false);
  const [isMoreInfo, setIsMoreInfo] = useState(false);
  const [isIndex, setIsIndex] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isShareVisible, setIsShareVisible] = useState(false);
  const [isCollectionVisible, setIsCollectionVisible] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<number[]>([]);
  const [saveSelectedCollection, setSaveSelectedCollection] = useState<
    number[]
  >([]);
  const [showIconAnimation, setShowIconAnimation] = useState(false);
  const animationValue = useRef(new Animated.Value(1)).current;

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const threshold = 278;
    setIsTitleVisible(scrollY > threshold);
  };

  const handleCollectionPress = (id: number) => {
    setSelectedCollection((prevSelectedCollection) => {
      if (prevSelectedCollection.includes(id)) {
        return prevSelectedCollection.filter((itemId) => itemId !== id);
      } else {
        return [...prevSelectedCollection, id];
      }
    });
  };

  const handleSaveCollectionPress = () => {
    setIsCollectionVisible(false);
    setSaveSelectedCollection(selectedCollection);

    if (
      isCollectionVisible &&
      selectedCollection.length > 0 &&
      saveSelectedCollection.length === 0
    ) {
      setShowIconAnimation(true);
      Animated.sequence([
        Animated.timing(animationValue, {
          toValue: 1,
          duration: 400,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(animationValue, {
          toValue: 1,
          duration: 450,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(animationValue, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShowIconAnimation(false);
      });
    }
  };

  return (
    <View style={styles.container}>
      <BackShareHeader
        title="몰입 : 인생을 바꾸는 자기 혁명"
        isTitleVisible={isTitleVisible}
        onSharePress={() => setIsShareVisible(!isShareVisible)}
      />
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        <View style={styles.scrollWrap}>
          <View style={styles.mainWrap}>
            <Image
              source={require("../../assets/images/dummy/book/2.png")}
              style={styles.image}
            />
            <Text style={styles.titleText}>몰입 : 인생을 바꾸는 자기 혁명</Text>
            <Text style={styles.authorText}>황농문</Text>
          </View>
          <View style={styles.iconWrap}>
            <IconItem
              IconComponent={isRead ? ReadIcon : ReadDefaultIcon}
              text={isRead ? "읽음" : "읽기 전"}
              onPress={() => setIsRead(!isRead)}
              isActive={isRead}
            />
            <IconItem
              IconComponent={
                saveSelectedCollection.length > 0
                  ? ColletionClickIcon
                  : ColletionIcon
              }
              text="컬렉션"
              onPress={() => setIsCollectionVisible(!isCollectionVisible)}
              isActive={false}
            />
            <IconItem
              IconComponent={NoteIcon}
              text="노트"
              onPress={() =>
                dummyList.length > 0
                  ? navigation.navigate("AllNote")
                  : navigation.navigate("Write")
              }
              isActive={false}
            />
            <IconItem
              IconComponent={TimerIcon}
              text="타이머"
              onPress={() => navigation.navigate("Timer")}
              isActive={false}
            />
          </View>
          <View style={styles.infoWrap}>
            <InfoItem title="ISBN" content="9788925514826" />
            <InfoItem title="출판일" content="2017.12.10" />
            <InfoItem title="페이지" content="292p" />
          </View>
          <FoldItem
            isFold={isMoreInfo}
            onPress={() => setIsMoreInfo(!isMoreInfo)}
            title="상세 정보"
            content="뉴턴, 아인슈타인, 에디슨, 빌 게이츠, 워렌 버핏. 비범한 업적을 이룬 천재들에겐 한 가지 공통점이 있다. 고도로 집중된 상태에서 문제를 생각하는, 몰입적 사고를 한다는 것이다. 그들이 천재라서 집중력이 높은 게 아니라, 집중력이 높아 천재가 됐다는 얘기다. 몰입전문가 황농문 교수는 바로 '몰입'이 천재성을 일깨워줄 열쇠라 고 말한다. 저자는 30년 가까이 공학연구에 몸담아 온 공학자며 '하 전된 나노 입자 이론'으로 최우수논문상을 수상한 과학자다. 1990 년부터 몰입적 사고를 하며 연구를 수행했고 그때의 경험이 그의 삶 을 180°바꿔 놓았다. 저자는 몰입이 잠재된 우리의 두뇌 능력을 첨예하게 일깨워 능력을 극대화하고 삶의 만족도를 최고로 끌어올리는 방법이라고 이야기한 다. 그리고 이 책에서 '왜 우리가 몰입적 사고를 해야 하는지', '어떻 게 몰입으로 천재성을 끄집어낼 수 있는지'에 대해 해답을 제시한다. 저자는 지금까지의 경험을 바탕으로 몰입의 개념과 필요성을 새로 운 시각에서 정의하고 '몰입에 이르는 구체적인 방법'을 가르쳐준다. '생각' 자체는 눈에 보이지 않지만, 고도의 집중력을 발휘한 몰입은 확실히 눈에 띄는 생산적인 결과를 만들어낸다. 이 책은 불안과 우울 을 고질병처럼 안고 사는 현대인들에게 '인생을 획기적으로 바꾸는 몰입적 사고'를 가르쳐주는 안내서다."
          />
          <FoldItem
            isFold={isIndex}
            onPress={() => setIsIndex(!isIndex)}
            title="목차"
            content="prologue 몰입, 최고의 나를 만나는 기회intro 몰입 상태에서 경험한 문제 해결의 순간1장 Work Hard에서 Think Hard로 생각'을 이동하라세상을 바꾼 천재들의 생각법 20스스로 미분을 풀어낸 중학생들 26자유롭고 자연스러운 흐름, 몰입 30나의 특별한 몰입 체험_37무리하지 않으면서 꾸준히 공부하는 비법 43Work Hard에서 Think Hard의 패러다임으로 532장 본격적인 몰입을 시도하기 위하여몰입에 들어가기 전에 준비할 것들 60완전한 몰입에 들어가는 3일간의 과정 66몰입 이후에 알게 되는 것들 75몰입의 즐거움과 주의할점 87천천히 생각하기의 중요성 92몰입 상태에서의 문제 해결력 _103당신이 잠든 사이에 문제는 풀린다 110세렌디피티와 꿈속에서의 영감 116행복의 절정 121보다 의미 있는 삶으로 이끄는 가치관의 변화 124고도의 몰입에 이르는 순간 당신은 최고가 된다 134"
          />
          <View style={styles.sourceWrap}>
            <Text
              style={styles.sourceLink}
              onPress={() => Linking.openURL("https://www.aladin.co.kr")} //해당 도서 상세 페이지로 수정 필요
            >
              자세히보기
            </Text>
            <Text style={styles.sourceText}>
              도서 DB 제공 : 알라딘 인터넷서점(www.aladin.co.kr)
            </Text>
          </View>
        </View>
      </ScrollView>
      {isShareVisible && (
        <ShareBottomSheet onClose={() => setIsShareVisible(false)} />
      )}
      {isCollectionVisible && (
        <CollectionBottomSheet
          onClose={() => setIsCollectionVisible(false)}
          clickList={selectedCollection}
          onComplete={() => handleSaveCollectionPress()}
          onPress={(id) => handleCollectionPress(id)}
        />
      )}
      {showIconAnimation && (
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
            transform: [{ scale: animationValue }],
          }}
        >
          <ColletionAniIcon />
        </Animated.View>
      )}
    </View>
  );
};

export default DetailPage;
