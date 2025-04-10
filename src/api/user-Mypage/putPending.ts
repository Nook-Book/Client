import api from "..";

// 친구 요청 수락/거절
export const putPending = async (
  friendId: string,
  isAccept: boolean
): Promise<{ check: boolean } | undefined> => {
  const response = await api.put(
    `/api/v1/my-page/friend/pending/${friendId}?isAccept=${isAccept}`
  );
  if (response.status === 400) {
    console.log("test");
    throw new Error("닉네임 10자 이내");
  }
  return response.data;
};
