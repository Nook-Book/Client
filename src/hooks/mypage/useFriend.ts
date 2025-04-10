import {
  useMutation,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { deleteFriend } from "../../api/user-Mypage/deleteFriend";
import {
  getFriend,
  getPendingFriend,
  getSearchFriend,
} from "../../api/user-Mypage/getFriend";
import { postPending } from "../../api/user-Mypage/postPending";
import { putPending } from "../../api/user-Mypage/putPending";
import {
  FriendRequestResponse,
  ResponseFriend,
  UserListResponse,
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
): UseSuspenseQueryResult<UserListResponse, Error> {
  return useSuspenseQuery({
    queryKey: ["GetSearchFriend"],
    queryFn: () => getSearchFriend(keyword),
  });
}

// 친구 요청
export const usePostPending = () => {
  return useMutation({
    mutationFn: postPending,
  });
};

// 친구 요청 수락/거절
export const usePutPending = () => {
  return useMutation({
    mutationFn: ({
      friendId,
      isAccept,
    }: {
      friendId: string;
      isAccept: boolean;
    }) => putPending(friendId, isAccept),
  });
};

// 친구 삭제
export const useDeleteFriend = () => {
  return useMutation({
    mutationFn: (friendId: number) => deleteFriend(friendId),
  });
};
