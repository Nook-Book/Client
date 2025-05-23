import { useMutation } from "@tanstack/react-query";
import { deleteCollectionBook } from "../../api/collection/deleteBook";
import { deleteCollection } from "../../api/collection/deleteCollection";
import { patchBook } from "../../api/collection/patchBook";
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

// 컬렉션 도서 삭제
export function useDeleteBook() {
  return useMutation<{}, Error, { collectionId: number; bookIds: number[] }>({
    mutationFn: ({ collectionId, bookIds }) =>
      deleteCollectionBook(collectionId, bookIds),
  });
}

// 컬렉션 도서 이동
export function usePatchBook() {
  return useMutation<
    {},
    Error,
    { collectionId: number; bookId: number; targetCollectionId: number }
  >({
    mutationFn: ({ collectionId, bookId, targetCollectionId }) =>
      patchBook(collectionId, bookId, targetCollectionId),
  });
}
