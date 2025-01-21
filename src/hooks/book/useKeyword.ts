import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { getKeyword } from "../../api/book/getKeyword";
import { ResponseResentSearch } from "../../types/search/resentSearch";

export function useGetKeyword(): UseSuspenseQueryResult<
  ResponseResentSearch,
  Error
> {
  return useSuspenseQuery({
    queryKey: ["GetResentKeyword"],
    queryFn: () => getKeyword(),
  });
}
