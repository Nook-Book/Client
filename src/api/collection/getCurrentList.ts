import api from "..";
import { TCollectionListRes } from "../../types/library";

//현재 컬렉션 상세 조회
export const getCurrentList = async (): Promise<
  TCollectionListRes | undefined
> => {
  try {
    const response = await api.get(`/api/v1/collection/current`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
