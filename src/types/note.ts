export type TNoteListRes = {
  check: boolean;
  information: TNoteListInformationRes;
};

export type TNoteListInformationRes = {
  bookTitle: string;
  bookImage: string;
  noteCount: number;
  noteListRes: TNoteListNoteListResRes[];
};

export type TNoteListNoteListResRes = {
  noteId: number;
  title: string;
  createdDate: string;
};

export type TNoteDetailRes = {
  check: true;
  information: TNoteDetailInformationRes;
};

export type TNoteDetailInformationRes = {
  title: string;
  content: string;
  createdDate: string;
};

export type TSaveNoteReq = {
  bookId: number;
  title: string;
  content: string;
};

export type TEditNoteReq = {
  title: string;
  content: string;
};
