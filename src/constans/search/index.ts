export const SearchInputPlaceHolder = "검색어를 입력하세요";
export const RecentSearchText = "최근 검색어";
export const BestSellerLabel = "베스트 셀러";
export const BestSellerButton = "전체 보기";
interface Category {
  name: string;
  checked: boolean;
}
export const BestSellerKeywordsList: Category[] = [
  { name: "종합", checked: false },
  { name: "소설", checked: false },
  { name: "경제/경영", checked: false },
  { name: "자기계발", checked: false },
  { name: "시/에세이", checked: false },
  { name: "인문/교양", checked: false },
  { name: "취미/실용", checked: false },
  { name: "매거진", checked: false },
  { name: "판타지/무협", checked: false },
];
