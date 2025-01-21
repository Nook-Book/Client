import api from "..";

//챌린지 이미지 수정
export const patchImage = async (challengeId: number, formData: FormData) => {
  try {
    const response = await api.patch(
      `/api/v1/challenge/${challengeId}/image`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
