import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { getNote } from "../../api/user-Mypage/getNote";
import { MyNoteResponse } from "../../types/mypage/MyReport";

// 내 기록 전체 조회
export function useNote(
  keyword: string
): UseSuspenseQueryResult<MyNoteResponse, Error> {
  return useSuspenseQuery({
    queryKey: ["GetNote"],
    queryFn: () => getNote(keyword),
  });
}
