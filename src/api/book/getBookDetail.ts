import api from "..";
import { TBookDetailRes } from "../../types/detail";

//도서 상세 조회
export const getBookDetail = async (
  isbn: number
): Promise<TBookDetailRes | undefined> => {
  try {
    const response = await api.get(`/api/v1/book?isbn=${isbn}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
