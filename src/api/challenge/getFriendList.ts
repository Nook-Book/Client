import api from "..";
import { TFriendListRes } from "../../types/challenge";

//친구 목록 - 조회 및 검색
export const getFriendList = async (
  keyword: string
): Promise<TFriendListRes | undefined> => {
  try {
    const response = await api.get(
      `/api/v1/my-page/friend?keyword=${keyword}&page=0&size=20`
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
