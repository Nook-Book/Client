export type AlarmType = "FRIEND" | "CHALLENGE";
export type TimeType = "HOUR" | "DAY";

export interface AlarmItem {
  alarmId: number;
  message: string;
  alarmType: AlarmType;
  targetId: number;
  timeType: TimeType;
  timeValue: number;
}

export interface AlarmResponse {
  check: boolean;
  information: {
    isLast: boolean;
    alarms: AlarmItem[];
    totalPages: number;
    currentPage: number;
    totalElements: number;
  };
}
