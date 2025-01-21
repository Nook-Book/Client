import api from "..";

//독서 노트 삭제
export const deleteNote = async (noteId: number) => {
  try {
    const response = await api.delete(`/api/v1/note/${noteId}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
