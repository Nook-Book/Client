import api from "..";
import { TCalendarRes } from "../../types/challenge";

//챌린지 참가자의 날짜별 독서 기록 조회
export const getCalendar = async (
  participantId: number,
  date: string
): Promise<TCalendarRes[] | undefined> => {
  try {
    const response = await api.get(
      `/api/v1/challenges/participants/${participantId}/calendar/${date}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
