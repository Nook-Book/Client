import api from "..";
import { AuthRequest, KakaoAuthResponse } from "../../types/auth/auth";

// 카카오 로그인
export const postIdTokenLogin = async (
  authRequest: AuthRequest
): Promise<KakaoAuthResponse> => {
  const response = await api.post("/auth/idTokenLogin", authRequest);
  return response.data;
};
