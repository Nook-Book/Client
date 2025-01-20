import api from "..";

//도서 상태 변경
export const patchBookDetailStatus = async (
  bookId: number
): Promise<
  | {
      check: boolean;
      information: "BEFORE_READ" | "READ";
    }
  | undefined
> => {
  try {
    const response = await api.patch(`/api/v1/book/${bookId}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
