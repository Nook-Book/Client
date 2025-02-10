import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { getMyPage } from "../../api/user-Mypage/getMyPage";
import { ResponseMyPage } from "../../types/mypage";

// 내 정보 조회
export function useMyPage(): UseSuspenseQueryResult<ResponseMyPage, Error> {
  return useSuspenseQuery({
    queryKey: ["GetMyPage"],
    queryFn: () => getMyPage(),
  });
}
