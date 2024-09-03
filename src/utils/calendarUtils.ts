//날짜 차이 계산
export const calculateDaysDifference = (start: string, end: string): number => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const timeDiff = endDate.getTime() - startDate.getTime();
  const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24)) + 1;

  return dayDiff;
};

//요일 가져오기
export const getDayOfWeek = (date: string): string => {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const dayIndex = new Date(date).getDay();
  return daysOfWeek[dayIndex];
};
