import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";
import { getList } from "../../api/collection/getList";
import { getCollectionDetail } from "../../api/user-Mypage/getCollectionDetail";
import { TCollectionListsRes } from "../../types/library";
import { MyCollectionDetailResponse } from "../../types/mypage/collection";

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

// 컬렉션 상세 조회
export function useGetCollectionDetail(
  collectionId: number
): UseSuspenseQueryResult<MyCollectionDetailResponse, Error> {
  return useSuspenseQuery({
    queryKey: ["GetCollectionDetail", collectionId],
    queryFn: () => getCollectionDetail(collectionId),
  });
}
