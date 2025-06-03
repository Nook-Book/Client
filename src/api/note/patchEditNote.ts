import api from "..";
import { TSaveNoteReq } from "../../types/note";

//독서 노트 수정
export const patchEditNote = async (noteId: number, note: TSaveNoteReq) => {
  try {
    const response = await api.patch(`/api/v1/notes/${noteId}`, note);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
