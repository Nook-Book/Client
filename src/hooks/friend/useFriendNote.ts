import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { MyNoteResponse } from "../../types/mypage/myReport";
import { getFriendNote } from "../../api/friend/getFriendNote";

// 친구 기록 전체 조회
export function useFriendNote(
  userId: number,
  keyword: string
): UseSuspenseQueryResult<MyNoteResponse, Error> {
  return useSuspenseQuery({
    queryKey: ["GetFriendNote"],
    queryFn: () => getFriendNote(userId, keyword),
  });
}
