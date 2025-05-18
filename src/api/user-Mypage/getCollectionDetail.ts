import api from "..";

// 컬렉션 상세 조회
export const getCollectionDetail = async (collectionId: number) => {
  const response = await api.get(`/api/v1/collections/${collectionId}/books`);
  return response.data;
};
