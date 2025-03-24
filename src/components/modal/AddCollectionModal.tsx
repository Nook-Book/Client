import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useCreateCollection } from "../../hooks/collection/useCollections";
import { styles } from "../../styles/modal/AddCollectionModalStyle";
import { Color } from "../../styles/Theme";

const AddCollectionModal = ({
  onExit,
  refetch,
}: {
  onExit: () => void;
  refetch: () => void;
}) => {
  const [collectionName, setCollectionName] = useState("");
  const { mutate: createCollection } = useCreateCollection();
  const handleCreateCollection = () => {
    createCollection(
      { title: collectionName },
      {
        onSuccess: () => {
          refetch();
          onExit();
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>컬렉션 추가</Text>
        <TextInput
          placeholder="컬렉션 이름은 최소 한 글자 이상 입력해주세요.."
          value={collectionName}
          onChangeText={setCollectionName}
          placeholderTextColor={Color.Typo.Secondary}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleCreateCollection();
            }}
          >
            <Text style={[styles.buttonText, { color: Color.Contents.Click }]}>
              생성하기
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onExit}>
            <Text style={styles.buttonText}>취소</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddCollectionModal;
