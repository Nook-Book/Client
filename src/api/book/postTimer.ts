import api from "..";

//타이머 기록 저장
export const postTimer = async (bookId: number, time: number) => {
  try {
    const response = await api.post(`/api/v1/book/${bookId}/timer`, {
      time: time,
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
