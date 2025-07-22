import api from "..";
import { TCalendarRes } from "../../types/challenge";

//특정 유저의 날짜별 독서 기록 조회
export const getCalendar = async (
  userId: number,
  date: string
): Promise<TCalendarRes[] | undefined> => {
  try {
    const response = await api.get(`/api/v1/users/${userId}/calendar/${date}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
