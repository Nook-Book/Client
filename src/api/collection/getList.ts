import api from "..";
import { TCollectionListsRes } from "../../types/library";

export const getList = async (): Promise<TCollectionListsRes | undefined> => {
  try {
    const response = await api.get(`/api/v1/collection/list`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
