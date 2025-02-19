import api from "..";

//타이머 종료
export const postTimerEnd = async (
  bookId: number,
  timerId: number,
  time: number
) => {
  try {
    const response = await api.post(`/api/v1/book/${bookId}/timer/${timerId}`, {
      time: time,
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
