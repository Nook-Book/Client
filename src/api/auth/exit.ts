import api from "..";

export const exit = async () => {
  const response = await api.delete("/auth/exit");
  return response.data;
};
