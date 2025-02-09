export type TBookDetailRes = {
  check: boolean;
  information: TBookDetailInformationRes;
};

export type TBookDetailInformationRes = {
  bookId: number;
  bookStatus: "BEFORE_READ" | "READ";
  storedCollection: boolean;
  collectionIds: number[];
  hasNote: boolean;
  item: {
    title: string;
    author: string;
    cover: string;
    isbn13: string;
    pubDate: string;
    itemPage: number;
    fullDescription: string;
    toc: string;
    link: string;
    categoryName: string;
  };
};

export type DetailNavigationProp = {
  navigate: (screen: string, params?: { isbn: string }) => void;
};
