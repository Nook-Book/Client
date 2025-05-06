import api from "..";
import { TNoteListRes } from "../../types/note";

//독서 노트 목록 조회
export const getFriendNoteList = async (
  userId: number,
  bookId: number
): Promise<TNoteListRes | undefined> => {
  try {
    const response = await api.get(
      `/api/v1/user/${userId}/note/book/${bookId}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
