export type TTimerListRes = {
  check: boolean;
  information: TTimerListInformationRes;
};

export type TTimerListInformationRes = {
  timerId?: number;
  totalReadTime: string;
  recordResList: TTimerListRecordRes[];
  isReading: boolean;
};

export type TTimerListRecordRes = {
  timerId: number;
  date: string;
  time: string;
  readTime: string;
};
