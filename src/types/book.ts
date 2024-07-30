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

export type TBookNote = {
  id: number;
  title: string;
  date: string;
};
