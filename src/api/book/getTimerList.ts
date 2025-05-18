import api from "..";
import { TTimerListRes } from "../../types/timer";

//타이머 기록 조회
export const getTimerList = async (
  bookId: number
): Promise<TTimerListRes | undefined> => {
  try {
    const response = await api.get(`/api/v1/books/${bookId}/timers`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
