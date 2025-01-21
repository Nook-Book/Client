import api from "..";

//컬렉션 도서 삭제
export const deleteBook = async (collectionId: number, bookIds: number[]) => {
  try {
    const response = await api.delete(
      `/api/v1/collection/${collectionId}/books`,
      { data: { bookIds } }
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
