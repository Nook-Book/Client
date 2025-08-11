import api from "../../api";

export const markAllAlarmsAsRead = async (): Promise<void> => {
  await api.patch("/api/v1/alarms");
};