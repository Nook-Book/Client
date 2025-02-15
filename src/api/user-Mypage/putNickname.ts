import api from "..";

// 마이 프로필 닉네임 변경
export const putNickname = async (
  nickname: string
): Promise<{} | undefined> => {
  try {
    const response = await api.put(`/api/v1/my-page/nickname`, {
      nickname: nickname,
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
