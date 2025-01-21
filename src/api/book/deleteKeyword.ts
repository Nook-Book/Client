import api from "..";

//최근 검색어 삭제
export const deleteKeyword = async (keywordId: number): Promise<string> => {
  const response = await api.delete(`/api/v1/book/keyword/${keywordId}`);
  return response.data;
};
