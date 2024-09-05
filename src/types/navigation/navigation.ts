import { RouteProp } from "@react-navigation/native";

export type RootSearchStackParamList = {
  SearchPage: undefined;
  BestSellerPage: undefined;
  SearchResultPage: { query: string };
  navigate: (screen: string) => void;
};

export type RootMyPageStackParamList = {
  MyPage: undefined;
  SettingPage: undefined;
  EditProfilePage: undefined;
  SetIdPage: undefined;
  SetNicknamePage: undefined;
  navigate: (screen: string) => void;
};

export type BestSellerPageRouteProp = RouteProp<
  RootSearchStackParamList,
  "SearchResultPage"
>;
