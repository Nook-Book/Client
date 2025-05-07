import api from "..";
import { ExistsResponse } from "../../types/auth/auth";

// 기존 사용자 여부 조회
export const getRegistered = async (): Promise<ExistsResponse | undefined> => {
  try {
    const response = await api.get(`/api/v1/user/exists`);
    return response.data;
  } catch (e) {
    console.log("API 오류:", e);
    // 기본값 반환
    return {
      check: false,
      information: {
        registered: false,
      },
    }; // ExistsResponse 형식에 맞는 기본값
  }
};
