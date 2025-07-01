import api from "..";
import { GetUserInfoResponse, UserSearchResponse } from "../../types/user/user";

// 사용자 검색
export const getUser = async (keyword: string): Promise<UserSearchResponse> => {
  const response = await api.get("/api/v1/users/search", {
    params: {
      keyword: keyword,
    },
  });
  return response.data;
};

// 사용자 조회
export const getUserInfo = async (
  userId: number
): Promise<GetUserInfoResponse> => {
  const response = await api.get(`/api/v1/users/${userId}`);
  return response.data;
};
