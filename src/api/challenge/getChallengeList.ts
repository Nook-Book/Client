import api from "..";
import { TChallengeListRes } from "../../types/challenge";

//챌린지 목록 조회
export const getChallengeList = async (): Promise<
  TChallengeListRes | undefined
> => {
  try {
    const response = await api.get(`/api/v1/challenge/list`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
