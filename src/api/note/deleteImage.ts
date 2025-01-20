import api from "..";

//이미지 삭제
export const deleteImage = async (imageUrl: string) => {
  try {
    const response = await api.delete(
      `/api/v1/note/image?imageUrl=${imageUrl}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
