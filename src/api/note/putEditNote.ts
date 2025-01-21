import api from "..";
import { TEditNoteReq } from "../../types/note";

//독서 노트 수정
export const putEditNote = async (noteId: number, note: TEditNoteReq) => {
  try {
    const response = await api.put(`/api/v1/note/${noteId}`, note);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
