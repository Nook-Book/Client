import api from "..";

//챌린지 방장 변경
export const patchOwner = async (challengeId: number, newOwnerId: number) => {
  try {
    const response = await api.patch(
      `/api/v1/challenge/${challengeId}/owner/${newOwnerId}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
