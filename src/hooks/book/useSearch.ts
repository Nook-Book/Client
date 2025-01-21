import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { getSearch } from "../../api/book/getSearch";
import { ResponseBookSearchResult } from "../../types/search/search";

//최근 검색어 조회
export function useSearch(
  keyword: string
): UseSuspenseQueryResult<ResponseBookSearchResult, Error> {
  return useSuspenseQuery({
    queryKey: ["GetSearch"],
    queryFn: () => getSearch(keyword),
  });
}
