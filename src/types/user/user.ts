export interface UserRequest {
  nicknameId: string;
}

export interface UserNicknameRequest {
  nickname: string;
}

export interface SuccessResponse {
  is_unique: boolean;
}

export interface ErrorResponse {
  message: string;
  status: number;
  code: string;
}

export interface UserResponse {
  check: boolean;
  information: SuccessResponse;
}

// -------------------------------------------------------

export interface UserInfoRequest {
  nickname: string;
  nicknameId: string;
}

export interface UserSuccessResponse {
  message: string;
}
export interface UserInfoResponse {
  check: boolean;
  information: UserSuccessResponse;
}
