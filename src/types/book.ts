export type TBook = {
  id: number;
  image: any;
  title: string;
};

export type TBookCategory = {
  id: number;
  title: string;
  dummyBook: TBook[];
};
