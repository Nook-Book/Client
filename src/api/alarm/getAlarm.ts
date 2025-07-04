import api from "../../api";
import { AlarmResponse } from "../../types/alarm/alarm";

export const getAlarm = async (): Promise<AlarmResponse> => {
  const response = await api.get("/api/v1/alarms");
  return response.data;
};
