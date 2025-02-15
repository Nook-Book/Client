import api from "..";

//챌린지 나가기
export const deleteChallengeExit = async (challengeId: number) => {
  try {
    const response = await api.delete(`/api/v1/challenge/exit/${challengeId}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
