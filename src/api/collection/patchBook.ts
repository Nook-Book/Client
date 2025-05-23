import api from "..";

// 컬렉션 도서 이동
export const patchBook = async (
  collectionId: number,
  bookId: number,
  targetCollectionId: number
) => {
  try {
    const response = await api.post(
      `/api/v1/collections/${collectionId}/books/${bookId}`,
      {
        targetCollectionId,
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
