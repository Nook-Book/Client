import api from "..";

//챌린지 멤버 깨우기
export const postWakeUp = async (
  challengeId: number,
  participantId: number
) => {
  try {
    const response = await api.post(
      `/api/v1/challenges/${challengeId}/participants/${participantId}/wake-up`
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
