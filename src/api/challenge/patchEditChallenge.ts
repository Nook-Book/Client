import api from "..";
import { TEditChallengeReq } from "../../types/challenge";

//챌린지 정보 수정
export const patchEditChallenge = async (
  challengeId: number,
  data: TEditChallengeReq
) => {
  try {
    const response = await api.patch(`/api/v1/challenge/${challengeId}`, data);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
