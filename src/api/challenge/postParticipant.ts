import api from "..";

//챌린지 참가자 초대 요청
export const postParticipant = async (
  challengeId: number,
  participantId: number
) => {
  try {
    const response = await api.post(
      `/api/v1/challenge/${challengeId}/participant/${participantId}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
