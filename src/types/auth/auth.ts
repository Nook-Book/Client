export interface AuthRequest {
  email: string;
  accessToken: string;
}

export interface KaKaoAuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface KakaoAuthResponse {
  check: boolean;
  information: KaKaoAuthTokens;
}
