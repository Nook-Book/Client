import api from "..";
import { ResponseBookSearchResult } from "../../types/search/search";

// 검색 조회
export const getSearch = async (
  keyword: string
): Promise<ResponseBookSearchResult | undefined> => {
  try {
    const response = await api.get(`api/v1/book/search?keyword=${keyword}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
