import React, { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
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
import { FriendsList } from "../../constans/myPage/friendPage/friends";
import { Color } from "../../styles/Theme";
import { styles } from "../../styles/myPage/friendPage/FriendPage";

const FriendPage = () => {
  const [friendNav, setFriendNav] = useState<"친구 목록" | "친구 추가">(
    "친구 목록"
  );
  const [searchText, setSearchText] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>("");

  const handleSearchSubmit = () => {
    if (searchText.trim() === "") {
      Alert.alert("검색어를 입력해 주세요.");
      return;
    }
    // navigation.navigate("SearchResultPage", { query: searchText });
  };

  const handleSetFriendNav = (state: "친구 목록" | "친구 추가") => {
    setFriendNav(state);
  };

  const handleDeleteFriend = (name: string) => {
    setModalText(name);
    setIsModalOpen(true);
  };
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
      />
      {friendNav === "친구 목록" ? (
        <GestureHandlerRootView style={styles.friendContainer}>
          {FriendsList.map((name, index) => (
            <>
              <Swipeable
                friction={1}
                rightThreshold={80}
                renderRightActions={() => (
                  <FriendRenderActions
                    name={name}
                    onDelete={handleDeleteFriend}
                  />
                )}
                key={index}
              >
                <FriendComponent name={name} />
              </Swipeable>
            </>
          ))}
        </GestureHandlerRootView>
      ) : (
        <View style={styles.addFriendContainer}>
          <Text style={styles.label}>받은 요청</Text>
          <ReceivedRequestFriend />
          <View style={styles.border} />
          <Text style={styles.label}>보낸 요청</Text>
          <SendRequestFriend />
        </View>
      )}
    </View>
  );
};

export default FriendPage;
