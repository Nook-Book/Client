// 친구 삭제

import api from "../../api";

export const deleteFriend = async (friendId: number) => {
  try {
    // friendId를 사용해서 친구 삭제 (API 응답에 friendId 추가됨)
    const response = await api.delete(`/api/v1/friends/${friendId}`);
    return response.data;
  } catch (e) {
    console.error("친구 삭제 API 오류 - friendId:", friendId, "error:", e);
    throw e;
  }
};
