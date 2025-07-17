import api from "../../api";
import { AlarmResponse } from "../../types/alarm/alarm";

export const getAlarm = async (): Promise<AlarmResponse> => {
  const response = await api.get("/api/v1/alarms", {
    params: {
      page: 1,
      size: 30,
    },
  });
  return response.data;
};
