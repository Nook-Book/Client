import api from "..";

//컬렉션 도서 삭제
export const deleteBook = async (collectionId: number, bookIds: number[]) => {
  console.log({ data: { bookIds } });
  try {
    const response = await api.post(
      `/api/v1/collections/${collectionId}/books/delete`,
      { data: { bookIds } }
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const deleteCollectionBook = async (
  collectionId: number,
  bookIds: number[]
) => {
  try {
    const response = await api.post(
      `/api/v1/collections/${collectionId}/books/delete`,
      { bookIds }
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
