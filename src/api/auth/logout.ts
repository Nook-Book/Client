import api from "..";

export const logout = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};
