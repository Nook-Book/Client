import api from "..";

//챌린지 초대 거절
export const postRejectChallenge = async (challengeId: number) => {
  try {
    const response = await api.post(`/api/v1/challenge/${challengeId}/accept`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
