import api from "..";
import { MyNoteResponse } from "../../types/mypage/myReport";

// 친구 기록 전체 보기
export const getFriendNote = async (
  userId: number,
  keyword: string
): Promise<MyNoteResponse | undefined> => {
  try {
    const response = await api.get(`/api/v1/users/${userId}/books`, {
      params: {
        keyword,
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
