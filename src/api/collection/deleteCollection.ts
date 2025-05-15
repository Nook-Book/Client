import api from "..";

//컬렉션 삭제
export const deleteCollection = async (collectionId: number) => {
  try {
    const response = await api.delete(`/api/v1/collections/${collectionId}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
