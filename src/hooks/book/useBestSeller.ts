import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { ResponseBookSearchResult } from "../../types/search/bestbook";
import { getBestSeller } from "./../../api/book/getBestSeller";

// 베스트 셀러 조회
export function useBestSeller({
  category = 0,
  size = 12,
}): UseSuspenseQueryResult<ResponseBookSearchResult, Error> {
  return useSuspenseQuery({
    queryKey: ["GetBestSeller"],
    queryFn: () => getBestSeller({ category, size }),
  });
}
