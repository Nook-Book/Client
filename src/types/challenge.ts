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
  check: boolean;
  information: TInviteContentRes[];
};

export type TInviteContentRes = {
  userId: number;
  nickname: string;
  profileImage: string;
  invitable: boolean;
};

export type TFriendListRes = {
  check: true;
  information: {
    userId: number;
    nickname: string;
    imageUrl: string;
  }[];
};

export type TParticipantRes = {
  check: boolean;
  information: {
    isOwner: boolean;
    participantList: TParticipantListRes[];
  };
};

export type TParticipantListRes = {
  participantId: number;
  participantNickname: string;
  participantImage: string;
  role: string;
};
