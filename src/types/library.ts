export type TCollectionListRes = {
  check: boolean;
  information: {
    totalCollections: number;
    mainCollectionListDetailRes: TMainCollectionListDetailRes[];
  };
};

export type TMainCollectionListDetailRes = {
  order: number;
  collectionStatus: "MAIN" | "NORMAL";
  collectionId: number;
  collectionTitle: string;
  collectionBooksListDetailRes: TCollectionBooksListDetailRes[];
};

export type TCollectionBooksListDetailRes = {
  bookId: number;
  isbn: string;
  title: string;
  cover: string;
};

export type TCollectionListsRes = {
  check: boolean;
  information: {
    totalCollections: number;
    collectionListDetailRes: TCollectionListDetailRes[];
  };
};

export type TCollectionListDetailRes = {
  order: number;
  collectionStatus: "MAIN" | "NORMAL";
  collectionId: number;
  collectionTitle: string;
  totalBooks: number;
  collectionBooksCoverList: string[];
};

export type TCollectionOrderReq = {
  collectionId: number;
  status: number;
  order: number;
};
