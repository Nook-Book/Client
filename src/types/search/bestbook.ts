export type BestBook = {
  id: number;
  image: any;
  title: string;
  name: string;
};
export type BestBookCategory = {
  id: number;
  title: string;
  dummyBook: BestBook[];
};
export interface BestSellerKeywordsCategory {
  name: string;
  checked: boolean;
}

export interface BestSellerKeywordProp {
  text: string;
  onFocus: (text: string) => void;
  checked: boolean;
}

// 베스트 셀러 요청 props
export interface RequestBestSeller {
  category?: number;
  size?: number;
}

// 각 책 항목에 대한 타입
interface BookItem {
  title: string; // 책 제목
  author: string; // 저자
  isbn13: string; // ISBN13
  cover: string; // 책 표지 이미지 URL
  bestRank: number; // 베스트 순위
}

// 전체 응답 타입
export interface ResponseBookSearchResult {
  totalResults: number; // 총 결과 수
  startIndex: number; // 시작 인덱스
  itemsPerPage: number; // 한 페이지당 항목 수
  item: BookItem[]; // 책 항목 배열
}
