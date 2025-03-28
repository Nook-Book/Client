import api from "..";

// 친구 요청
export const postPending = async (userId: number): Promise<{} | undefined> => {
  try {
    const response = await api.post(`/api/v1/my-page/friend/pending/${userId}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
