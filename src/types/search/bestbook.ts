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
