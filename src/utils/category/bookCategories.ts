/**
 * 베스트셀러 카테고리 정보
 */
export const BESTSELLER_CATEGORIES = {
  종합: 0,
  소설: 1,
  "경제/경영": 170,
  자기계발: 336,
  시: 50940,
  에세이: 55889,
  "인문/교양": 656,
  "취미/실용": 55890,
  매거진: 2913,
} as const;

export type CategoryName = keyof typeof BESTSELLER_CATEGORIES;
export type CategoryCode = (typeof BESTSELLER_CATEGORIES)[CategoryName];

/**
 * 카테고리 이름에서 코드를 가져오는 함수
 * @param categoryName 카테고리 이름
 * @returns 카테고리 코드 (기본값은 '0')
 */
export const getCategoryCode = (categoryName?: CategoryName): CategoryCode => {
  if (!categoryName || !(categoryName in BESTSELLER_CATEGORIES)) {
    return 0; // 기본값은 종합(0)
  }
  return BESTSELLER_CATEGORIES[categoryName];
};

/**
 * 카테고리 코드에서 이름을 가져오는 함수
 * @param categoryCode 카테고리 코드
 * @returns 카테고리 이름 (기본값은 '종합')
 */
export const getCategoryName = (categoryCode?: CategoryCode): CategoryName => {
  const entries = Object.entries(BESTSELLER_CATEGORIES) as [
    CategoryName,
    CategoryCode
  ][];
  const entry = entries.find(([_, code]) => code === categoryCode);

  if (!entry) {
    return "종합"; // 기본값은 종합
  }

  return entry[0];
};

/**
 * 모든 카테고리 정보를 가져오는 함수
 * @returns {Array<{name: CategoryName, code: CategoryCode}>} 카테고리 정보 배열
 */
export const getAllCategories = (): Array<{
  name: CategoryName;
  code: CategoryCode;
}> => {
  return Object.entries(BESTSELLER_CATEGORIES).map(([name, code]) => ({
    name: name as CategoryName,
    code: code as CategoryCode,
  }));
};
