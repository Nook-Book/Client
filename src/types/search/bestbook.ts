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
