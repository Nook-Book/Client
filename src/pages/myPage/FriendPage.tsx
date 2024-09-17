import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import MyPageAtherNav from "../../components/myPage/MyPageAtherNav";
import FriendComponent from "../../components/myPage/friendPage/FriendComponent";
import FriendNav from "../../components/myPage/friendPage/FriendNav";
import { Color } from "../../styles/Theme";
import { styles } from "../../styles/myPage/friendPage/FriendPage";

const FriendPage = () => {
  const [friendNav, setFriendNav] = useState<"친구 목록" | "친구 추가">(
    "친구 목록"
  );
  const [searchText, setSearchText] = useState<string>("");

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

  const renderRightActions = () => (
    <TouchableOpacity onPress={() => alert("삭제됨")} style={styles.delete}>
      <Text style={styles.text}>삭제하기</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
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
      <GestureHandlerRootView>
        <Swipeable
          friction={1}
          rightThreshold={80}
          renderRightActions={renderRightActions}
        >
          <FriendComponent name="야옹아 멍멍해봐" />
        </Swipeable>
        <Swipeable
          friction={1}
          rightThreshold={80}
          renderRightActions={renderRightActions}
        >
          <FriendComponent name="야옹아 멍멍해봐" />
        </Swipeable>
      </GestureHandlerRootView>
    </View>
  );
};

export default FriendPage;
