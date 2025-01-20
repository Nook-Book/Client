import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "../../styles/modal/ModalStyle";
import { Color } from "../../styles/Theme";

const InputModal = ({
  onClose,
  onComplate,
}: {
  onClose: () => void;
  onComplate: (text: string) => void;
}) => {
  const [text, setText] = useState("");

  return (
    <View>
      <Text style={styles.titleText}>컬렉션 추가</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="컬렉션 이름은 최소 한 글자 이상 입력해주세요."
        placeholderTextColor={Color.Typo.Secondary}
      />
      <View style={styles.buttonWrap}>
        <TouchableOpacity
          onPress={() => {
            if (text.length >= 1) {
              onComplate(text);
            }
          }}
        >
          <Text style={styles.blueText}>생성하기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.grayText}>취소</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputModal;
