export type TTimerListRes = {
  check: boolean;
  information: TTimerListInformationRes;
};

export type TTimerListInformationRes = {
  totalReadTime: string;
  recordResList: TTimerListRecordRes[];
};

export type TTimerListRecordRes = {
  timerId: number;
  date: string;
  time: string;
  readTime: string;
};
