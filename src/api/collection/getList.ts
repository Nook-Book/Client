import api from "..";

export const getList = async () => {
  try {
    const response = await api.get(`/api/v1/collection/current`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
