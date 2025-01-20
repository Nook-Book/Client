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
  title: string;
  cover: string;
};
