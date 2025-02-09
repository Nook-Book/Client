import React, { useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { useReport } from "../../hooks/mypage/useReport";
import useYear from "../../store/useYear";
import { Color, Font } from "../../styles/Theme";
import BookstatisticsHeader from "./BookstatisticsHeader";
const Bookstatistics = () => {
  const screenWidth = Dimensions.get("window").width;

  const { year } = useYear();

  const { data, refetch } = useReport();

  const countList: number[] = new Array(12).fill(0);

  useEffect(() => {
    refetch();

    data.information.forEach((item) => {
      if (item.month >= 1 && item.month <= 12) {
        countList[item.month - 1] = item.count;
      }
    });
  }, [year]);

  data.information.forEach((item) => {
    if (item.month >= 1 && item.month <= 12) {
      countList[item.month - 1] = item.count;
    }
  });

  console.log(countList);

  // 막대 그래프에 표시할 데이터
  const reportData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],

    datasets: [
      {
        data: countList,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientFromOpacity: 1,
    fillShadowGradientFrom: "#7799BB",
    fillShadowGradientFromOpacity: 1,
    fillShadowGradientFromOffset: 1,
    fillShadowGradientTo: "#7799BB",
    fillShadowGradientToOpacity: 1,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: 1,
    color: () => "#7799BB", // 막대 색상 설정
    barPercentage: 0.6,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // 레이블 색상 설정
    propsForLabels: {
      ...Font.Label.SemiMedium,
      color: Color.Typo.Primary,
    },
  };
  return (
    <View>
      <BookstatisticsHeader />
      <BarChart
        style={styles.chart}
        data={reportData}
        width={screenWidth}
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        chartConfig={chartConfig}
        fromZero={true}
        withInnerLines={false}
        showBarTops={false}
        showValuesOnTopOfBars={true}
        withHorizontalLabels={false}
      />
    </View>
  );
};

export default Bookstatistics;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  chart: {
    borderRadius: 16,
    marginTop: 15,
    marginBottom: 100,
    left: "-10%",
  },
});
