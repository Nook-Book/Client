import api from "..";
import { MyNoteResponse } from "../../types/mypage/myReport";

// 내 기록 전체 보기
export const getNote = async (
  keyword: string
): Promise<MyNoteResponse | undefined> => {
  try {
    const response = await api.get(`/api/v1/my-page/note`, {
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
