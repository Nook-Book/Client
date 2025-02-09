import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { getReport } from "../../api/user-Mypage/getReport";

// 베스트 셀러 조회
export function useReport(): UseSuspenseQueryResult<ResponseReport, Error> {
  return useSuspenseQuery({
    queryKey: ["GetReport"],
    queryFn: () => getReport(),
  });
}
