import {
  useMutation,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { getMyPage } from "../../api/user-Mypage/getMyPage";
import { putId } from "../../api/user-Mypage/putId";
import { putProfileImage } from "../../api/user-Mypage/putImage";
import { putNickname } from "../../api/user-Mypage/putNickname";
import { ResponseMyPage } from "../../types/mypage";

// 내 정보 조회
export function useMyPage(): UseSuspenseQueryResult<ResponseMyPage, Error> {
  return useSuspenseQuery({
    queryKey: ["GetMyPage"],
    queryFn: () => getMyPage(),
  });
}

// 닉네임 변경
export const usePutNickname = () => {
  return useMutation({
    mutationFn: putNickname,
  });
};

// 닉네임 변경
export const usePutId = () => {
  return useMutation({
    mutationFn: putId,
  });
};

// 프로필 변경
export const usePutProfileImage = () => {
  return useMutation({
    mutationFn: putProfileImage,
  });
};
