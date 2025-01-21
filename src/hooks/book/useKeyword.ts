import {
  useMutation,
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { deleteKeyword } from "../../api/book/deleteKeyword";
import { getKeyword } from "../../api/book/getKeyword";
import { ResponseResentSearch } from "../../types/search/resentSearch";

//최근 검색어 조회
export function useGetKeyword(): UseSuspenseQueryResult<
  ResponseResentSearch,
  Error
> {
  return useSuspenseQuery({
    queryKey: ["GetResentKeyword"],
    queryFn: () => getKeyword(),
  });
}

// 최근 검색어 삭제
export function useDeleteKeyword() {
  return useMutation<{}, Error, { keywordId: number }>({
    mutationFn: ({ keywordId }) => deleteKeyword(keywordId),
  });
}
