import api from "..";
import { TCollectionOrderReq } from "../../types/library";

export const postOrder = async (orderList: TCollectionOrderReq[]) => {
  try {
    const response = await api.post(`/api/v1/collection/order`, orderList);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
