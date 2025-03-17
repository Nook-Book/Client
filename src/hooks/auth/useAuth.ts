import { useMutation } from "@tanstack/react-query";
import { postIdTokenLogin } from "../../api/auth/idTokenLogin";
import { AuthRequest, KakaoAuthResponse } from "../../types/auth/auth";

export function useKakaoLogin() {
  return useMutation<KakaoAuthResponse, Error, AuthRequest>({
    mutationFn: (authRequest) => postIdTokenLogin(authRequest),
  });
}
