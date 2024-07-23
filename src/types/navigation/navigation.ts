// navigation/types.ts

// 스크린 이름과 그에 대한 파라미터를 정의합니다.
export type RootStackParamList = {
  SearchPage: undefined;
  BestSellerPage: undefined;
  SearchResultPage: { query: string };
  navigate: (screen: string) => void;
};

// React Navigation의 RouteProp을 사용하여 route.params의 타입을 정의합니다.
import { RouteProp } from "@react-navigation/native";

export type BestSellerPageRouteProp = RouteProp<
  RootStackParamList,
  "SearchResultPage"
>;
