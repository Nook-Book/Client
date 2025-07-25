import api from "..";
import { UserRequest, UserResponse } from "../../types/user/user";
// 아이디 중복 확인
export const postUserIdCheck = async (
  userRequest: UserRequest
): Promise<UserResponse> => {
  const response = await api.post("/api/v1/users/nickname-id", userRequest);
  return response.data;
};
