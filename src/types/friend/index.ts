import { User } from "../mypage/friend";

export type FriendParamList = {
  goBack(): void;
  navigate(arg0: string, arg1: { query: string; userId?: number }): unknown;
  SearchResultPage: { query: string };
  FriendSearchResultPage: { query: string; userId: number };
};

export interface FriendComponentProps {
  user: User;
  type: "Friend" | "RecieveFriend" | "SendFriend";
  isRequestProp?: boolean;
  refetch: () => void;
}
