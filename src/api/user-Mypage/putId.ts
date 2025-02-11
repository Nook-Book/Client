import api from "..";

// 마이 프로필 id 변경
export const putId = async (id: string): Promise<{} | undefined> => {
  try {
    const response = await api.put(`/api/v1/my-page/nickname-id`, {
      nicknameId: id,
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
