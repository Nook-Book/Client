import React from "react";
import { Dimensions, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import Svg, { Circle } from "react-native-svg";
import { Color } from "../../styles/Theme";

import { useCategory } from "../../hooks/mypage/useCategory";

const screenWidth = Dimensions.get("window").width;
const CategoryReport = () => {
  const { data } = useCategory();

  const colorKeys: (keyof typeof Color.Click)[] = [
    200, 300, 400, 500, 600, 700,
  ];

  const MyPageBookCategorydata = data.information.map((item, index) => ({
    name: item.category,
    book: item.count,
    color: Color.Click[colorKeys[index % colorKeys.length]],
    legendFontColor: Color.Typo.Primary,
    legendFontSize: 15,
  }));

  const filteredData = MyPageBookCategorydata.filter((item) => item.book > 0);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PieChart
        data={filteredData}
        width={screenWidth} // 그래프의 너비
        height={157} // 그래프의 높이
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        accessor="book"
        backgroundColor="transparent"
        paddingLeft="15"
        center={[-20, 10]} // 중심의 위치 설정
        absolute
      />
      <Svg
        width={screenWidth} // 도넛 그래프와 동일한 너비
        height={157} // 도넛 그래프와 동일한 높이
        style={{ position: "absolute", top: 10, left: 0 }}
      >
        <Circle
          cx={(screenWidth - 205) / 2} // 중심의 x 좌표
          cy={80} // 중심의 y 좌표 (그래프 높이의 절반)
          r={35} // 원의 반지름 설정
          fill="white" // 원의 색상 설정 (흰색)
        />
      </Svg>
    </View>
  );
};

export default CategoryReport;
