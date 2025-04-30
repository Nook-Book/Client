import api from "..";
import { TNoteListRes } from "../../types/note";

//독서 노트 목록 조회
export const getMyPageNoteList = async (
  userId: number,
  bookId: number
): Promise<TNoteListRes | undefined> => {
  try {
    const response = await api.get(`/api/v1/my-page/${userId}/note/${bookId}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
