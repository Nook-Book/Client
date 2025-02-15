import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import {
  getFriend,
  getPendingFriend,
  getSearchFriend,
} from "../../api/user-Mypage/getFriend";
import {
  FriendRequestResponse,
  FriendSearchRequestResponse,
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

// 친구 검색
export function useGetSearchFriend(
  keyword: string
): UseSuspenseQueryResult<FriendSearchRequestResponse, Error> {
  return useSuspenseQuery({
    queryKey: ["GetSearchFriend"],
    queryFn: () => getSearchFriend(keyword),
  });
}
