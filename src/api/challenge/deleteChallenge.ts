import api from "..";

//챌린지 삭제
export const deleteChallenge = async (challengeId: number) => {
  try {
    const response = await api.delete(`/api/v1/challenge/${challengeId}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
