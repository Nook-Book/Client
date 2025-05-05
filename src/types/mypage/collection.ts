export interface MyCollectionDetailResponse {
  check: boolean;
  information: {
    totalBooks: number;
    collectionBooksListDetailRes: MyCollectionBookDetail[];
  };
}
export interface MyCollectionBookDetail {
  bookId: number;
  isbn: string;
  title: string;
  cover: string;
}
