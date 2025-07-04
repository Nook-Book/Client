import { useQuery } from "@tanstack/react-query";
import { getAlarm } from "../../api/alarm/getAlarm";

export const useGetAlarm = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["alarm"],
    queryFn: getAlarm,
  });
  return { data, isLoading, error, refetch };
};
