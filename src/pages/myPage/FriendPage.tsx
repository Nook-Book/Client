import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import MyPageAtherNav from "../../components/myPage/MyPageAtherNav";
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
import { Color } from "../../styles/Theme";
import { styles } from "../../styles/myPage/friendPage/FriendPage";
import { FriendParamList } from "../../types/friend";
import { FriendRequest } from "../../types/mypage/friend";

const FriendPage = () => {
  const [friendNav, setFriendNav] = useState<"친구 목록" | "친구 추가">(
    "친구 목록"
  );
  const [searchText, setSearchText] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>("");
  const [userList, setUserList] = useState<FriendRequest[]>([]);

  const { data: friendData } = useGetFriend();
  const { data: pendingFriendData } = useGetPendingFriend();

  // const FriendsSearchResultList = FriendsList.filter(
  //   (friend) => friend.toLowerCase().includes(searchText.toLowerCase()) // 대소문자 구분 없이 검색
  // );

  const navigation = useNavigation<FriendParamList>();

  const handleSearchSubmit = () => {
    // setUserList(FriendDummyList.length > 0 ? FriendDummyList : []);
    // navigation.navigate("FriendSearchResultPage", { query: searchText });
  };

  const handleSetFriendNav = (state: "친구 목록" | "친구 추가") => {
    setFriendNav(state);
  };

  const handleDeleteFriend = (name: string) => {
    setModalText(name);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (searchText === "") {
      setUserList([]);
    }
  }, [searchText]);

  return (
    <View style={styles.container}>
      {isModalOpen && (
        <>
          <View style={styles.overlay} />
          <FriendDeleteModal
            title={modalText}
            onExit={() => setIsModalOpen(false)}
          />
        </>
      )}

      <MyPageAtherNav title="친구" />
      <FriendNav state={friendNav} onClick={handleSetFriendNav} />
      <TextInput
        style={styles.input}
        placeholder={"아이디 또는 닉네임을 검색하세요."}
        value={searchText}
        onChangeText={setSearchText}
        placeholderTextColor={Color.Typo.Secondary}
        onSubmitEditing={handleSearchSubmit}
        autoCapitalize="none"
      />
      {friendNav === "친구 목록" ? (
        <ScrollView>
          <GestureHandlerRootView style={styles.friendContainer}>
            {friendData.information.map((friend, index) => (
              <View key={index}>
                <Swipeable
                  friction={1}
                  rightThreshold={80}
                  renderRightActions={() => (
                    <FriendRenderActions
                      key={friend.userId}
                      name={friend.nickname}
                      onDelete={handleDeleteFriend}
                    />
                  )}
                >
                  <FriendComponent
                    name={friend.nickname}
                    image={friend.imageUrl}
                    type="Friend"
                  />
                </Swipeable>
              </View>
            ))}
          </GestureHandlerRootView>
        </ScrollView>
      ) : (
        <View style={styles.addFriendContainer}>
          {searchText === "" ? (
            <>
              <View style={styles.border} />
              <Text style={styles.label}>받은 요청</Text>
              <ReceivedRequestFriend
                friends={pendingFriendData.information.receivedRequest}
              />
              <View style={styles.border} />
              <Text style={styles.label}>보낸 요청</Text>
              <SendRequestFriend
                userList={pendingFriendData.information.sentRequest}
                isRequest={true}
              />
            </>
          ) : (
            <>
              {/* <SendRequestFriend userList={FriendDummyList} isRequest={false} /> */}
            </>
          )}
        </View>
      )}
    </View>
  );
};

export default FriendPage;
