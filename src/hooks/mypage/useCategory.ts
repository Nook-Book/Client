import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { getCategory } from "../../api/user-Mypage/getReportCategory";
import { ResponseCategory } from "../../types/mypage/category";

// 카테고리 조회
export function useCategory(): UseSuspenseQueryResult<ResponseCategory, Error> {
  return useSuspenseQuery({
    queryKey: ["GetCategory"],
    queryFn: () => getCategory(),
  });
}
