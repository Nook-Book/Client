import { TChallenge, TInviteChallenge } from "../../types/challenge";

export const dummyListLong: TChallenge[] = [
  {
    id: 1,
    image: require("../../assets/images/dummy/book/1.png"),
    title: "미라닝 모닝 굿모닝 하이 빅스비",
  },
  {
    id: 2,
    image: require("../../assets/images/dummy/book/2.png"),
    title: "모닝모닝아침이라네",
  },
  {
    id: 3,
    image: require("../../assets/images/dummy/book/3.png"),
    title: "아침에 책을 읽는 새가 밤에 잔다 아침에 책을 읽는 새가 밤에 잔다",
  },
  {
    id: 4,
    image: require("../../assets/images/dummy/book/1.png"),
    title: "미라닝 모닝 굿모닝 하이 빅스비",
  },
  {
    id: 5,
    image: require("../../assets/images/dummy/book/2.png"),
    title: "모닝모닝아침이라네",
  },
  {
    id: 6,
    image: require("../../assets/images/dummy/book/3.png"),
    title: "아침에 책을 읽는 새가 밤에 잔다 아침에 책을 읽는 새가 밤에 잔다",
  },
  {
    id: 7,
    image: require("../../assets/images/dummy/book/1.png"),
    title: "미라닝 모닝 굿모닝 하이 빅스비",
  },
  {
    id: 8,
    image: require("../../assets/images/dummy/book/2.png"),
    title: "모닝모닝아침이라네",
  },
  {
    id: 9,
    image: require("../../assets/images/dummy/book/3.png"),
    title: "아침에 책을 읽는 새가 밤에 잔다 아침에 책을 읽는 새가 밤에 잔다",
  },
  {
    id: 10,
    image: require("../../assets/images/dummy/book/3.png"),
    title: "아침에 책을 읽는 새가 밤에 잔다 아침에 책을 읽는 새가 밤에 잔다",
  },
  {
    id: 11,
    image: require("../../assets/images/dummy/book/1.png"),
    title: "미라닝 모닝 굿모닝 하이 빅스비",
  },
  {
    id: 12,
    image: require("../../assets/images/dummy/book/2.png"),
    title: "모닝모닝아침이라네",
  },
  {
    id: 13,
    image: require("../../assets/images/dummy/book/3.png"),
    title: "아침에 책을 읽는 새가 밤에 잔다 아침에 책을 읽는 새가 밤에 잔다",
  },
];

export const dummyList: TChallenge[] = [
  {
    id: 1,
    image: require("../../assets/images/dummy/book/1.png"),
    title: "미라닝 모닝 굿모닝 하이 빅스비",
  },
];

export const dummyListInvite: TInviteChallenge[] = [
  {
    id: 1,
    title: "밀란 쿤데라 책 도전하쉴?",
  },
  {
    id: 2,
    title: "밀란 쿤데라 책 도전하쉴?밀란 쿤데라 책 도전하쉴?",
  },
  {
    id: 3,
    title:
      "밀란 쿤데라 책 도전하쉴?밀란 쿤데라 책 도전하쉴?밀란 쿤데라 책 도전하쉴?",
  },
];

export const dummyListCard = {
  image: require("../../assets/images/dummy/book/1.png"),
  title: "미라클 모닝 독서 가즈앗미라클 모닝 독서 가즈앗",
  status: "INPROGRESS",
  profileList: [
    {
      id: 1,
      image: require("../../assets/images/dummy/book/1.png"),
      name: "야옹아멍멍해바두두",
    },
    {
      id: 2,
      image: require("../../assets/images/dummy/book/2.png"),
      name: "야옹아멍멍해바두두",
    },
    {
      id: 3,
      image: require("../../assets/images/dummy/book/3.png"),
      name: "두부두부",
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
  ],
  isCheck: true,
  startDate: "2024-03-02",
  endDate: "2024-03-24",
  startPeriod: {
    hour: "01",
    minute: "00",
    ampm: "AM",
  },
  endPeriod: {
    hour: "03",
    minute: "05",
    ampm: "PM",
  },
  goalTime: {
    hour: "05",
    minute: "15",
  },
  totalTime: "16시간",
  dailyTime: "40분",
  selectedParticipant: [1, 3, 6],
  cardList: [
    {
      id: 1,
      isEnabled: true,
      name: "야옹아멍멍해바두두",
      time: "00 : 21 : 00",
    },
    {
      id: 2,
      isEnabled: false,
      name: "두두",
      time: "03 : 21 : 00",
    },
    {
      id: 3,
      isEnabled: true,
      name: "야옹아멍멍해바두두",
      time: "00 : 21 : 00",
    },
    {
      id: 4,
      isEnabled: true,
      name: "야옹아멍멍해바두두",
      time: "00 : 21 : 00",
    },
    {
      id: 5,
      isEnabled: true,
      name: "야옹아멍멍해바두두",
      time: "00 : 21 : 00",
    },
  ],
};

export const dummyListParticipant = [
  {
    id: 1,
    image: require("../../assets/images/dummy/book/9.png"),
    name: "강두기",
    isOwner: true,
  },
  {
    id: 2,
    image: require("../../assets/images/dummy/book/1.png"),
    name: "강두기",
    isOwner: false,
  },
  {
    id: 3,
    image: require("../../assets/images/dummy/book/2.png"),
    name: "강두기",
    isOwner: false,
  },
  {
    id: 4,
    image: require("../../assets/images/dummy/book/2.png"),
    name: "강두기",
    isOwner: false,
  },
  {
    id: 5,
    image: require("../../assets/images/dummy/book/4.png"),
    name: "강두기",
    isOwner: false,
  },
  {
    id: 6,
    image: require("../../assets/images/dummy/book/4.png"),
    name: "강두기",
    isOwner: false,
  },
  {
    id: 7,
    image: require("../../assets/images/dummy/book/4.png"),
    name: "강두기",
    isOwner: false,
  },
  {
    id: 8,
    image: require("../../assets/images/dummy/book/4.png"),
    name: "강두기",
    isOwner: false,
  },
  {
    id: 9,
    image: require("../../assets/images/dummy/book/4.png"),
    name: "강두기",
    isOwner: false,
  },
  {
    id: 10,
    image: require("../../assets/images/dummy/book/4.png"),
    name: "강두기",
    isOwner: false,
  },
  {
    id: 11,
    image: require("../../assets/images/dummy/book/4.png"),
    name: "강두기",
    isOwner: false,
  },
  {
    id: 12,
    image: require("../../assets/images/dummy/book/4.png"),
    name: "강두기",
    isOwner: false,
  },
  {
    id: 13,
    image: require("../../assets/images/dummy/book/4.png"),
    name: "강두기",
    isOwner: false,
  },
  {
    id: 14,
    image: require("../../assets/images/dummy/book/4.png"),
    name: "강두기",
    isOwner: false,
  },
];
