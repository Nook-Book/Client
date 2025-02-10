import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { getFriend, getPendingFriend } from "../../api/user-Mypage/getFriend";
import {
  FriendRequestResponse,
  ResponseFriend,
} from "../../types/mypage/friend";

// 친구 목록 조회
export function useGetFriend(): UseSuspenseQueryResult<ResponseFriend, Error> {
  return useSuspenseQuery({
    queryKey: ["GetFriend"],
    queryFn: () => getFriend(),
  });
}

// 보낸/받은 요청 친구 목록 조회
export function useGetPendingFriend(): UseSuspenseQueryResult<
  FriendRequestResponse,
  Error
> {
  return useSuspenseQuery({
    queryKey: ["GetPendingFriend"],
    queryFn: () => getPendingFriend(),
  });
}
