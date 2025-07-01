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

// -------------------------------------------------------

export interface UserContent {
  userId: number;
  nickname: string;
  imageUrl: string;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface SearchInformation {
  content: UserContent[];
  pageable: Pageable;
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface UserSearchResponse {
  check: boolean;
  information: SearchInformation;
}

// -------------------------------------------------------

export interface GetUserInfoResponse {
  check: boolean;
  information: UserFriendInfo;
}

export interface UserFriendInfo {
  nicknameId: string;
  nickname: string;
  imageUrl: string;
  friendsNum: number;
  requestStatus: string;
}
