import api from "..";
import { TParticipantRes } from "../../types/challenge";

//챌린지 참가자 목록 조회
export const getParticipant = async (
  challengeId: number
): Promise<TParticipantRes | undefined> => {
  try {
    const response = await api.get(
      `/api/v1/challenge/${challengeId}/participant`
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
