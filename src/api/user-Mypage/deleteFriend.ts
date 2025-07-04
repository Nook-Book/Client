// 친구 삭제

import api from "../../api";

export const deleteFriend = async (friendId: number) => {
  const response = await api.delete(`/api/v1/friends/${friendId}`);
  return response.data;
};
