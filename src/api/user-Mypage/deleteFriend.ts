// 친구 삭제

import api from "../../api";

export const deleteFriend = async (friendId: number) => {
  console.log(friendId);
  const response = await api.delete(`/api/v1/my-page/friend/${friendId}`);
  return response.data;
};
