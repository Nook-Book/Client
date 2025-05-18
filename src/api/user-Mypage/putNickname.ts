import api from "..";

// 마이 프로필 닉네임 변경
export const putNickname = async (
  nickname: string
): Promise<{ check: boolean } | undefined> => {
  const response = await api.patch(`/api/v1/my-page/nickname`, {
    nickname: nickname,
  });
  if (response.status === 400) {
    console.log("test");
    throw new Error("닉네임 10자 이내");
  }
  return response.data;
};
