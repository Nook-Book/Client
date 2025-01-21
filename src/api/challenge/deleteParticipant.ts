import api from "..";

//챌린지 참가자 삭제
export const deleteParticipant = async (
  challengeId: number,
  participantId: number
) => {
  try {
    const response = await api.delete(
      `/api/v1/challenge/${challengeId}/participant/${participantId}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
