import api from "..";

// 월별 독서 통계 조회
export const getReport = async (year: number): Promise<any | undefined> => {
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
