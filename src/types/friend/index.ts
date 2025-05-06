import { User } from "../mypage/friend";

export type FriendParamList = {
  goBack(): void;
  navigate(
    arg0: string,
    arg1: { nickname: string; userId?: number; friendId?: number }
  ): unknown;
  SearchResultPage: { query: string };
  FriendSearchResultPage: {
    nickname: string;
    userId: number;
    friendId: number;
  };
};

export interface FriendComponentProps {
  user: User;
  type: "Friend" | "RecieveFriend" | "SendFriend";
  isRequestProp?: boolean;
  refetch: () => void;
}
