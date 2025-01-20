import api from "..";
import { TCollectionListRes } from "../../types/library";

export const getCurrentList = async (): Promise<TCollectionListRes | undefined> => {
  try {
    const response = await api.get(`/api/v1/collection/current`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
