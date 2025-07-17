import React, { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import BackTextHeader from "../../components/header/BackTextHeader";
import FriendComponent from "../../components/myPage/friendPage/FriendComponent";
import FriendDeleteModal from "../../components/myPage/friendPage/FriendDeleteModal";
import FriendNav from "../../components/myPage/friendPage/FriendNav";
import FriendRenderActions from "../../components/myPage/friendPage/FriendRenderActions";
import ReceivedRequestFriend from "../../components/myPage/friendPage/ReceivedRequestFriend";
import SendRequestFriend from "../../components/myPage/friendPage/SendRequestFriend";
import {
  useGetFriend,
  useGetPendingFriend,
} from "../../hooks/mypage/useFriend";
import { useGetUser } from "../../hooks/user/useUser";
import { Color } from "../../styles/Theme";
import { styles } from "../../styles/myPage/friendPage/FriendPage";
import { FriendInfo } from "../../types/mypage/friend";
import { UserContent } from "../../types/user/user";

const FriendPage = (navigation: any) => {
  const [friendNav, setFriendNav] = useState<"친구 목록" | "친구 추가">(
    "친구 목록"
  );
  const [searchText, setSearchText] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedFriend, setSelectedFriend] = useState<FriendInfo | null>(null);
  const [userList, setUserList] = useState<UserContent[]>([]);
  const [openSwipeIndex, setOpenSwipeIndex] = useState<number | null>(null);

  const { data: friendData, refetch: refetchFriend } = useGetFriend(searchText);
  const { data: userData, refetch: refetchUser } = useGetUser(searchText);
  const { data: pendingFriendData, refetch: refetchPendingFriend } =
    useGetPendingFriend();

  const refetchData = () => {
    refetchFriend();
    refetchUser();
    refetchPendingFriend();
  };

  useEffect(() => {
    if (searchText === "") {
      setUserList([]);
      return;
    }
    refetchData();
  }, [searchText]);

  const handleSetFriendNav = (state: "친구 목록" | "친구 추가") => {
    setFriendNav(state);
  };

  const handleDeleteFriend = (friend: FriendInfo) => {
    setSelectedFriend(friend);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (searchText === "") {
      setUserList([]);
    }
  }, [searchText]);

  return (
    <View style={styles.container}>
      <BackTextHeader title="친구" />
      <FriendNav state={friendNav} onClick={handleSetFriendNav} />
      <TextInput
        style={styles.input}
        placeholder={"아이디 또는 닉네임을 검색하세요."}
        value={searchText}
        onChangeText={setSearchText}
        placeholderTextColor={Color.Typo.Secondary}
        autoCapitalize="none"
      />
      {/* 친구 목록 */}
      {friendNav === "친구 목록" ? (
        <ScrollView>
          <GestureHandlerRootView style={styles.friendContainer}>
            {friendData.information.map((friend, index) => (
              <View key={index}>
                <Swipeable
                  friction={1}
                  rightThreshold={80}
                  onSwipeableOpen={() => setOpenSwipeIndex(index)}
                  onSwipeableClose={() =>
                    setOpenSwipeIndex((prev) => (prev === index ? null : prev))
                  }
                  renderRightActions={() => (
                    <FriendRenderActions
                      key={friend.userId}
                      name={friend.nickname}
                      onDelete={() => handleDeleteFriend(friend)}
                    />
                  )}
                >
                  <FriendComponent
                    user={friend}
                    type="Friend"
                    refetch={refetchData}
                    isSwipeableOpen={openSwipeIndex === index}
                  />
                </Swipeable>
              </View>
            ))}
          </GestureHandlerRootView>
        </ScrollView>
      ) : (
        // 친구 추가
        <View style={styles.addFriendContainer}>
          {searchText === "" ? (
            <>
              <View style={styles.border} />
              <Text style={styles.label}>받은 요청</Text>
              <ReceivedRequestFriend
                friends={pendingFriendData.information.receivedRequest}
                refetch={refetchPendingFriend}
              />
              <View style={styles.border} />
              <Text style={styles.label}>보낸 요청</Text>
              <SendRequestFriend
                userList={pendingFriendData.information.sentRequest}
                isRequest={true}
                refetch={refetchPendingFriend}
              />
            </>
          ) : (
            <>
              <SendRequestFriend
                userList={userData.information.content}
                isRequest={false}
                refetch={refetchPendingFriend}
              />
            </>
          )}
        </View>
      )}

      {/* 모달 컴포넌트를 최상위로 이동 */}
      {isModalOpen && selectedFriend && (
        <>
          <View style={styles.overlay} />
          <FriendDeleteModal
            title={selectedFriend.nickname}
            friendId={selectedFriend.friendId}
            onExit={() => {
              setIsModalOpen(false);
              setSelectedFriend(null);
            }}
            refetch={refetchData}
          />
        </>
      )}
    </View>
  );
};

export default FriendPage;
