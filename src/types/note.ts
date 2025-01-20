export type TgetNoteListRes = {
  check: boolean;
  information: TgetNoteListInformationRes;
};

export type TgetNoteListInformationRes = {
  bookTitle: string;
  bookImage: string;
  noteCount: number;
  noteListRes: TgetNoteListNoteListResRes[];
};

export type TgetNoteListNoteListResRes = {
  noteId: number;
  title: string;
  createdDate: string;
};
