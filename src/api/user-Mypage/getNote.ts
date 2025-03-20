import api from "..";
import { MyReportResponse } from "../../types/mypage/MyReport";

// 내 기록 전체 보기
export const getNote = async (
  keyword: string
): Promise<MyReportResponse | undefined> => {
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
