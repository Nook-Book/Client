import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, TextInput, View } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import { SearchInputPlaceHolder } from "../../constans/search";
import { styles } from "../../styles/search/SearchHeaderStyle";
import { Color } from "../../styles/Theme";
import { RootStackParamList } from "../../types/search";
import { handleSearchSubmit } from "../../utils/search/handleSearch";

type Props = {
  search?: string;
};

export default function SearchHeader({ search }: Props) {
  const navigation = useNavigation<RootStackParamList>();
  const [searchText, setSearchText] = useState<string>(search ? search : "");

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
          onSubmitEditing={() => handleSearchSubmit(searchText, navigation)}
        />
      </View>
    </SafeAreaView>
  );
}
