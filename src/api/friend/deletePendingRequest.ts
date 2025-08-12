import api from "..";

// 보낸 친구 요청 취소
export const deletePendingRequest = async (userId: number): Promise<{} | undefined> => {
  try {
    const response = await api.delete(`/api/v1/friends/requests/${userId}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};