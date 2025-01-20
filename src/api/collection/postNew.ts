import api from "..";

//새 컬렉션 생성
export const postNew = async (title: string) => {
  try {
    const response = await api.post(`/api/v1/collection/new`, title);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
