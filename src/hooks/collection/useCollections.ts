import { useMutation } from "@tanstack/react-query";
import { postNew } from "../../api/collection/postNew";

// 컬랙션 생성
export function useCreateCollection() {
  return useMutation<{}, Error, { title: string }>({
    mutationFn: ({ title }) => postNew(title),
  });
}
