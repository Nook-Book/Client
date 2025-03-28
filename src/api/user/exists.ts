import api from "..";
import { ExistsResponse } from "../../types/auth/auth";

// 친구 조회
export const getRegistered = async (): Promise<ExistsResponse | undefined> => {
  try {
    const response = await api.get(`/api/v1/user/exists`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
