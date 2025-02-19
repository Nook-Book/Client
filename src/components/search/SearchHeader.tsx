import React, { useState } from "react";
import { View, SafeAreaView, TextInput, Alert } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import { styles } from "../../styles/search/SearchHeaderStyle";
import { useNavigation } from "@react-navigation/native";
import { SearchInputPlaceHolder } from "../../constans/search";
import { Color } from "../../styles/Theme";
import { RootStackParamList } from "../../types/search";

type Props = {
  search?: string;
};

export default function SearchHeader({ search }: Props) {
  const navigation = useNavigation<RootStackParamList>();
  const [searchText, setSearchText] = useState<string>(search ? search : "");

  const handleSearchSubmit = () => {
    if (searchText.trim() === "") {
      Alert.alert("검색어를 입력해 주세요.");
      return;
    }
    navigation.navigate("SearchResultPage", { query: searchText });
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <BackIcon
          style={styles.button}
          onPress={() => navigation.goBack()}
          color={Color.Contents.Icon}
        />
        <TextInput
          style={styles.input}
          placeholder={SearchInputPlaceHolder}
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor={Color.Typo.Secondary}
          onSubmitEditing={handleSearchSubmit}
        />
      </View>
    </SafeAreaView>
  );
}
