import api from "..";
import { ResponseResentSearch } from "../../types/search/resentSearch";

//최근 검색어 조회
export const getKeyword = async (): Promise<
  ResponseResentSearch | undefined
> => {
  try {
    const response = await api.get(`/api/v1/book/keyword`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
