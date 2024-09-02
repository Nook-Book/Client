import BookstatisticsHeader from "./BookstatisticsHeader";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Color, Font } from "../../styles/Theme";
const Bookstatistics = () => {
  const screenWidth = Dimensions.get("window").width;

  // 막대 그래프에 표시할 데이터
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],

    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50, 0, 0, 0, 0, 0],
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
        data={data}
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
