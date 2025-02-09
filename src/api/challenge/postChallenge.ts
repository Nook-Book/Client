import api from "..";

//새 챌린지 생성
export const postChallenge = async (formData: FormData) => {
  try {
    const response = await api.post(`/api/v1/challenge`, formData, {
      headers: {
        "Content-Type": 'multipart/form-data; boundary="boundary"',
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
