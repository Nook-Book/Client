import api from "..";
import useYear from "../../store/useYear";

// 월별 독서 통계 조회
export const getReport = async (): Promise<any | undefined> => {
  const { year } = useYear();

  try {
    const response = await api.get(`/api/v1/my-page/reports`, {
      params: {
        type: "year",
        targetYear: year,
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
