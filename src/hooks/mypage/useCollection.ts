import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { getList } from "../../api/collection/getList";
import { TCollectionListsRes } from "../../types/library";

// 컬렉션 조회
export function useGetCollection(): UseSuspenseQueryResult<
  TCollectionListsRes,
  Error
> {
  return useSuspenseQuery({
    queryKey: ["GetCollection"],
    queryFn: async () => {
      const response = await getList();
      if (!response) {
        // 빈 데이터 반환
        return {
          collections: [],
        };
      }
      return response;
    },
  });
}
