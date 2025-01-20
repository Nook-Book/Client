import api from "..";
import { TCollectionListsRes } from "../../types/library";

//컬렉션 목록 조회
export const getList = async (): Promise<TCollectionListsRes | undefined> => {
  try {
    const response = await api.get(`/api/v1/collection/list`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
