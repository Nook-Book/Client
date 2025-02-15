interface FriendInfo {
  userId: number;
  friendId: number;
  nickname: string;
  imageUrl: string;
}

export interface ResponseFriend {
  check: boolean;
  information: FriendInfo[];
}

// ----------------------------------

export interface FriendRequest {
  userId: number;
  friendId?: number;
  nickname: string;
  imageUrl: string;
}

export interface FriendRequestResponse {
  check: boolean;
  information: {
    sentRequest: FriendRequest[];
    receivedRequest: FriendRequest[];
  };
}

// ----------------------------------

export interface FriendSearchRequestResponse {
  check: boolean;
  information: FriendRequest[];
}
