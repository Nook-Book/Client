import api from "..";
import { UserSearchResponse } from "../../types/user/user";

// 사용자 검색
export const getUser = async (keyword: string): Promise<UserSearchResponse> => {
  const response = await api.get("/api/v1/users/search", {
    params: {
      keyword: keyword,
    },
  });
  return response.data;
};
