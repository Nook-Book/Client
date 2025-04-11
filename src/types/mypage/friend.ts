interface FriendInfo {
  userId: number;
  friendId: number;
  nickname: string;
  imageUrl: string;
}

export interface ResponseFriend {
  check: boolean;
  information: FriendInfo[];
}

// ----------------------------------

export interface FriendRequest {
  userId: number;
  friendId?: number;
  nickname: string;
  imageUrl: string;
}

export interface FriendRequestResponse {
  check: boolean;
  information: {
    sentRequest: FriendRequest[];
    receivedRequest: FriendRequest[];
  };
}

// ----------------------------------
// 사용자 정보 인터페이스
export interface User {
  userId: number;
  nickname: string;
  imageUrl: string;
  friendId?: number;
}

// 정렬 정보 인터페이스
export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

// 페이지 정보 인터페이스
export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

// 페이지네이션된 응답 정보 인터페이스
export interface PagedInformation {
  content: User[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

// 전체 응답 인터페이스
export interface UserListResponse {
  check: boolean;
  information: PagedInformation;
}
