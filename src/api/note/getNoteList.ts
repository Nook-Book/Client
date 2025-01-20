import api from "..";
import { TgetNoteListRes } from "../../types/note";

//독서 노트 목록 조회
export const getNoteList = async (
  bookId: number
): Promise<TgetNoteListRes | undefined> => {
  try {
    const response = await api.get(`/api/v1/note/book/${bookId}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
