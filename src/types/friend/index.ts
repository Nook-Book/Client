export type FriendParamList = {
  goBack(): void;
  navigate(arg0: string, arg1: { query: string }): unknown;
  SearchResultPage: { query: string };
};

export interface FriendComponentProps {
  image?: string;
  name: string;
  type: "Friend" | "RecieveFriend" | "SendFriend";
  isRequestProp?: boolean;
}
