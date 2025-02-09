export type TChallenge = {
  id: number;
  image: any;
  title: string;
};

export type TInviteChallenge = {
  id: number;
  title: string;
};

export type TImagePickerModalProps = {
  visible: boolean;
  onClose: () => void;
  onImagePicked: (uri: string) => void;
};

export type TTime = {
  hour: string;
  minute: string;
  ampm?: string;
};

export type TChallengeListRes = {
  check: boolean;
  information: TChallengeListInformationRes;
};

export type TChallengeListInformationRes = {
  waitingCount: number;
  waitingList: TChallengeListInfoRes[];
  progressCount: number;
  progressList: TChallengeListInfoRes[];
  endCount: number;
  endList: TChallengeListInfoRes[];
  waitingInvitationCount: number;
  waitingInvitationList: TChallengeListInfoRes[];
};

export type TChallengeListInfoRes = {
  challengeId: number;
  title: string;
  challengeCover: string;
};

export type TChallengeDetailRes = {
  check: boolean;
  information: TChallengeDetailInformationRes;
};

export type TChallengeDetailInformationRes = {
  challengeId: number;
  isEditable: boolean;
  title: string;
  challengeCover: string;
  challengeStatus: "WAITING" | "PROGRESS" | "END";
  startDate: string;
  endDate: string;
  totalHour: number;
  dailyGoal: number;
  dailyStartTime: string;
  dailyEndTime: string;
  participants: TChallengeDetailParticipantsRes[];
};

export type TChallengeDetailParticipantsRes = {
  participantId: number;
  nickname: null | string;
  participantImage: string;
  participantStatus: string;
  readingBookTitle: string;
  readingBookImage: string;
  dailyReadingTime: null | number;
};

export type TEditChallengeReq = {
  title: string;
  startDate: string;
  endDate: string;
  dailyGoal: number;
  startTime: null | string;
  endTime: null | string;
};

export type TInviteRes = {
  content: TInviteContentRes[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};

export type TInviteContentRes = {
  userId: number;
  nickname: string;
  invitable: boolean;
  imageUrl: string;
};

export type TFriendListRes = {
  check: boolean;
  information: [
    {
      userId: number;
      friendId: number;
      nickname: string;
      imageUrl: string;
    }
  ];
};
