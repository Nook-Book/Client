import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../types/search";
import { styles } from ".././../../styles/myPage/editProfilePage/SetProfileNav";

const MyPageAtherNav = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => {
  const navigation = useNavigation<RootStackParamList>();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButton}>취소</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onClick}>
          <Text style={styles.okButton}>완료</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyPageAtherNav;
