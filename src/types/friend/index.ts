import { FriendInfo, User } from "../mypage/friend";

export type FriendParamList = {
  goBack(): void;
  navigate(
    arg0: string,
    arg1: {
      nickname: string;
      userId?: number;
      friendId?: number;
      type: "Friend" | "RecieveFriend" | "SendFriend";
      isRequest: boolean;
    }
  ): unknown;
  SearchResultPage: { query: string };
  FriendSearchResultPage: {
    nickname: string;
    userId: number;
    friendId: number;
    type: "Friend" | "RecieveFriend" | "SendFriend";
    isRequest: boolean;
  };
};

export interface FriendComponentProps {
  user: User | FriendInfo;
  type: "Friend" | "RecieveFriend" | "SendFriend";
  isRequestProp?: boolean;
  refetch: () => void;
  isSwipeableOpen?: boolean;
}
