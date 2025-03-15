import api from "..";
import { UserInfoRequest, UserInfoResponse } from "../../types/user/user";
// 간편 가입
export const postUserInfo = async (
  userRequest: UserInfoRequest
): Promise<UserInfoResponse> => {
  const response = await api.post("/api/v1/user/info", userRequest);
  return response.data;
};
