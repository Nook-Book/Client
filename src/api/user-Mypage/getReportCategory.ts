import api from "..";
import { ResponseCategory } from "../../types/mypage/category";

// 마이 프로필 카테고리 조회
export const getCategory = async (): Promise<ResponseCategory | undefined> => {
  try {
    const response = await api.get(`/api/v1/my-page/report/category`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
