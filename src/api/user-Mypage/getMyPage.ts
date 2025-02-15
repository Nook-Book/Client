import api from "..";
import { ResponseMyPage } from "../../types/mypage";

// 마이 프로필 조회
export const getMyPage = async (): Promise<ResponseMyPage | undefined> => {
  try {
    const response = await api.get(`/api/v1/my-page`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
