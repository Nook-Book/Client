import api from "..";
import { TNoteDetailRes } from "../../types/note";

//독서 노트 상세 조회
export const getNoteDetail = async (
  noteId: number
): Promise<TNoteDetailRes | undefined> => {
  try {
    const response = await api.get(`/api/v1/note/${noteId}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
