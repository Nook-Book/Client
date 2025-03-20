// 개별 책 정보에 대한 인터페이스
export interface Book {
  bookId: number;
  title: string;
  cover: string;
  author: string;
  publisher: string;
}

// 응답 데이터 전체 구조에 대한 인터페이스
export interface MyNoteResponse {
  check: boolean;
  information: Book[];
}
