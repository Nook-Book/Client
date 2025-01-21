// 단일 책 정보에 대한 타입
interface BookItem {
  title: string; // 책 제목
  author: string; // 저자
  pubDate: string; // 출판일
  isbn13: string; // ISBN13 번호
  cover: string; // 표지 이미지 URL
  publisher: string; // 출판사
}

// 검색 결과 전체에 대한 타입
export interface ResponseBookSearchResult {
  totalResults: number; // 전체 검색 결과 수
  startIndex: number; // 시작 인덱스
  itemsPerPage: number; // 페이지당 아이템 수
  item: BookItem[]; // 책 정보 배열
}
