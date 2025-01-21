import api from "..";
import { TChallengeDetailRes } from "../../types/challenge";

//챌린지 상세 조회
export const getChallengeDetail = async (
  challengeId: number
): Promise<TChallengeDetailRes | undefined> => {
  try {
    const response = await api.get(`/api/v1/challenge/${challengeId}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
