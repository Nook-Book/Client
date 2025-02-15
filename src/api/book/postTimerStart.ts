import api from "..";

//타이머 시작
export const postTimerStart = async (bookId: number) => {
  try {
    const response = await api.post(`/api/v1/book/${bookId}/timer`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
