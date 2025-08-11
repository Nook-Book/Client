import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { getReport } from "../../api/user-Mypage/getReport";

// 독서 통계 조회
export function useReport(year: number): UseSuspenseQueryResult<ResponseReport, Error> {
  return useSuspenseQuery({
    queryKey: ["GetReport", year],
    queryFn: () => getReport(year),
  });
}
