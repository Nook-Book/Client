import api from "..";
import { TCalendarRes } from "../../types/challenge";

//날짜별 독서 기록 조회
export const getMyCalendar = async (
  date: string
): Promise<TCalendarRes[] | undefined> => {
  try {
    const response = await api.get(`/api/v1/user-book/calendar/${date}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
