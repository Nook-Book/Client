import api from "..";
import { TFriendListRes } from "../../types/challenge";

//친구 목록
export const getFriendList = async (): Promise<TFriendListRes | undefined> => {
  try {
    const response = await api.get(`/api/v1/my-page/friend`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
