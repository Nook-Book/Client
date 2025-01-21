interface ResentSearchInformation {
  keywordId: number; // 키워드의 고유 ID
  content: string; // 키워드 내용
}

export interface ResponseResentSearch {
  check: boolean; // 체크 여부
  information: ResentSearchInformation[]; // 키워드 정보를 포함하는 배열
}
