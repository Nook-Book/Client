// 정보 배열의 각 항목 타입 정의
interface InformationItem {
  month: number; // 월
  count: number; // 개수
}

// 최상위 응답 타입 정의
interface ResponseReport {
  check: boolean; // 응답 상태
  information: InformationItem[]; // 정보 배열
}
