// information 객체 타입 정의
interface Information {
  nicknameId: string; // 닉네임 ID
  nickname: string; // 닉네임
  friendsNum: number; // 친구 수
  imageUrl: string;
}

// 최상위 응답 타입 정의
export interface ResponseMyPage {
  check: boolean; // 응답 상태
  information: Information; // 정보 객체
}
