import api from "..";
import { UserNicknameRequest, UserResponse } from "../../types/user/user";
// 닉네임 중복 확인
export const postUserNicknameCheck = async (
  userRequest: UserNicknameRequest
): Promise<UserResponse> => {
  const response = await api.post("/api/v1/user/nickname", userRequest);
  return response.data;
};
