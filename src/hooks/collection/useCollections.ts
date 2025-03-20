import { useMutation } from "@tanstack/react-query";
import { deleteCollection } from "../../api/collection/deleteCollection";
import { postNew } from "../../api/collection/postNew";

// 컬랙션 생성
export function useCreateCollection() {
  return useMutation<{}, Error, { title: string }>({
    mutationFn: ({ title }) => postNew(title),
  });
}

// 컬렉션 삭제
export function useDeleteCollection() {
  return useMutation<{}, Error, { collectionId: number }>({
    mutationFn: ({ collectionId }) => deleteCollection(collectionId),
  });
}
