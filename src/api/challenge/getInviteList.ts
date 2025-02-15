import api from "..";
import { TInviteRes } from "../../types/challenge";

//챌린지에 초대할 친구 목록 조회
export const getInviteList = async (
  challengeId: number
): Promise<TInviteRes | undefined> => {
  try {
    const response = await api.get(`/api/v1/challenge/${challengeId}/invite`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
