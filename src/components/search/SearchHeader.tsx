import React, { useState } from "react";
import { View, SafeAreaView, Text, TextInput } from "react-native";
import BackIcon from "../../assets/images/icon/Back.svg";
import { styles } from "../../styles/search/SearchHeaderStyle";
import { useNavigation } from "@react-navigation/native";
import { SearchInputPlaceHolder } from "../../constans/search";
import { Color } from "../../styles/Theme";

export default function SearchHeader() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState<string>("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackIcon style={styles.button} onPress={() => navigation.goBack()} />
        <TextInput
          style={styles.input}
          placeholder={SearchInputPlaceHolder}
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor={Color.Typo.Secondary}
        />
      </View>
    </SafeAreaView>
  );
}
