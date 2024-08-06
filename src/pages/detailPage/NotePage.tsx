import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { styles } from "../../styles/detail/NotePageStyle";
import NoteHeader from "../../components/header/NoteHeader";
import TitleDesModal from "../../components/modal/TitleDesModal";
import Markdown from "react-native-markdown-display";
import { markdownStyle } from "../../styles/markdown/MarkdownStyle";
import { RenderRules } from "../../styles/markdown/RenderRules";

const NotePage = ({ navigation }: { navigation: any }) => {
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const titleText = "몰입이란 몰까....";
  const markdownText = `# Brgba(32, 129, 236, 0.15)[몰입이란] 몰까....
책에서 말하길 T#43AE1D[몰입을] 잘하려면 첫번째로
# 편안한 자리 찾기
## 몰입하다가 자두댐ㅎㅎ
### 왜냐면 꿈에서도 T#DF1515[몰입이] 이어지기 때무네
+ 좋은 듯
1. Brgba(127, 53, 186, 0.15)[체리]사기
> 가장 중요한 것은 **아무래도** 몰입을 하고자하는 \`마음가짐\`인 듯...
~~내일부터~~ _실행해보자_`;

  return (
    <View style={styles.container}>
      <NoteHeader
        navigation={navigation}
        onDelete={() => setIsDeleteModal(!isDeleteModal)}
      />
      <View style={styles.contentContainer}>
        <ScrollView
          style={{ marginHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.titleText}>{titleText}</Text>
          <Markdown style={markdownStyle} rules={RenderRules}>
            {markdownText}
          </Markdown>
        </ScrollView>
      </View>
      {isDeleteModal && (
        <TitleDesModal
          titleText="삭제하기"
          desText={"해당 기록이 삭제됩니다\n이 동작은 취소할 수 없습니다."}
          onComplate={() => setIsDeleteModal(!isDeleteModal)}
          onClose={() => setIsDeleteModal(!isDeleteModal)}
        />
      )}
    </View>
  );
};

export default NotePage;
