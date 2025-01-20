import api from "..";

//이미지 업로드
export const postImage = async (formData: FormData) => {
  try {
    const response = await api.post(`/api/v1/note/image`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
