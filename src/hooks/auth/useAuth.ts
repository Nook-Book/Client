import {
  useMutation,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { postIdTokenLogin } from "../../api/auth/idTokenLogin";
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
