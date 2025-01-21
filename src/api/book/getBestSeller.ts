import api from "..";
import { RequestBestSeller } from "../../types/search/bestbook";
import { ResponseBookSearchResult } from "../../types/search/search";

// 베스트셀러 조회
export const getBestSeller = async ({
  category = 0,
  size = 12,
}: RequestBestSeller): Promise<ResponseBookSearchResult | undefined> => {
  try {
    const response = await api.get(`/api/v1/book/best-seller`, {
      params: {
        category,
        size,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching best sellers:", error);
    return undefined;
  }
};
