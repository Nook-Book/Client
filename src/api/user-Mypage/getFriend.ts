import api from "..";
import {
  FriendRequestResponse,
  ResponseFriend,
} from "../../types/mypage/friend";

// 친구 조회
export const getFriend = async (): Promise<ResponseFriend | undefined> => {
  try {
    const response = await api.get(`/api/v1/my-page/friend`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

// 받은/보낸 친구 요청 조회
export const getPendingFriend = async (): Promise<
  FriendRequestResponse | undefined
> => {
  try {
    const response = await api.get(`/api/v1/my-page/friend/pending`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

// 친구 추가 | 검색
export const getSearchFriend = async (
  keyword: string
): Promise<FriendRequestResponse | undefined> => {
  try {
    const response = await api.get(`/api/v1/my-page/friend/all`, {
      params: {
        keyword: keyword,
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
