import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAlarm } from "../../api/alarm/getAlarm";
import { markAllAlarmsAsRead } from "../../api/alarm/markAlarmAsRead";

export const useGetAlarm = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["alarm"],
    queryFn: getAlarm,
  });
  return { data, isLoading, error, refetch };
};

export const useMarkAllAlarmsAsRead = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: markAllAlarmsAsRead,
    onSuccess: () => {
      // 알림 데이터를 다시 가져와서 UI 업데이트
      queryClient.invalidateQueries({ queryKey: ["alarm"] });
    },
  });
};
