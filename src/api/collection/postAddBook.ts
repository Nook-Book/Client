import api from "..";

//컬렉션 도서 추가
export const postAddBook = async (collectionId: number, bookId: number) => {
  try {
    const response = await api.post(
      `/api/v1/collection/${collectionId}/${bookId}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
