import api from "..";
import { TSaveNoteReq } from "../../types/note";

//독서 노트 저장
export const postNote = async (note: TSaveNoteReq) => {
  try {
    const response = await api.post(`/api/v1/note`, note);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
