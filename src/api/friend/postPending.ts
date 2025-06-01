import api from "..";

// 친구 요청
export const postPending = async (userId: number): Promise<{} | undefined> => {
  try {
    const response = await api.post(`/api/v1/friends/requests`, {
      userId: userId,
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
