import { Alert } from "react-native";

/**
 * 검색 제출 핸들러
 * @param searchText 검색어
 * @param navigation 네비게이션
 */
export const handleSearchSubmit = (
  searchText: string,
  navigation: any,
  setSearchText?: (text: string) => void
) => {
  if (searchText.trim() === "") {
    Alert.alert("검색어를 입력해 주세요.");
    return;
  }
  setSearchText?.("");
  navigation.navigate("SearchResultPage", { query: searchText });
};
