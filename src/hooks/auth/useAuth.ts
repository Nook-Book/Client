import {
  useMutation,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { exit } from "../../api/auth/exit";
import { postIdTokenLogin } from "../../api/auth/idTokenLogin";
import { logout } from "../../api/auth/logout";
import { getRegistered } from "../../api/user/exists";
import {
  AuthRequest,
  ExistsResponse,
  KakaoAuthResponse,
} from "../../types/auth/auth";

export function useKakaoLogin() {
  return useMutation<KakaoAuthResponse, Error, AuthRequest>({
    mutationFn: (authRequest) => postIdTokenLogin(authRequest),
  });
}

// 기존 사용자 여부 조회
export function useGetRegistered(): UseSuspenseQueryResult<
  ExistsResponse,
  Error
> {
  return useSuspenseQuery({
    queryKey: ["GetRegistered"],
    queryFn: () => getRegistered(),
  });
}

// 로그아웃
export function useLogout() {
  return useMutation<void, Error>({
    mutationFn: () => logout(),
  });
}

// 회원 탈퇴
export function useExit() {
  return useMutation<void, Error>({
    mutationFn: () => exit(),
  });
}
