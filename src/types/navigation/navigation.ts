import { RouteProp } from "@react-navigation/native";

export type RootSearchStackParamList = {
  SearchPage: undefined;
  BestSellerPage: undefined;
  SearchResultPage: { query: string };
  Detail: { query: string };
  Timer: { query: string };
  AllNote: { query: string };
  Note: { query: string };
  Write: { query: string };
  navigate: (screen: string) => void;
};

export type RootMyPageStackParamList = {
  MyPage: undefined;
  SettingPage: undefined;
  EditProfilePage: undefined;
  SetIdPage: undefined;
  SetNicknamePage: undefined;
  FriendPage: undefined;
  FriendSearchResultPage: { query: string };
  navigate: (screen: string) => void;
};

export type BestSellerPageRouteProp = RouteProp<
  RootSearchStackParamList,
  "SearchResultPage"
>;

export type SearchFriendResultRouteProp = RouteProp<
  RootMyPageStackParamList,
  "FriendSearchResultPage"
>;
