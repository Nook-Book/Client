import { Text, TouchableOpacity, View } from "react-native";
import { useDeleteCollection } from "../../hooks/collection/useCollections";
import { styles } from "../../styles/modal/AddCollectionModalStyle";
import { Color } from "../../styles/Theme";
import { TCollectionListDetailRes } from "../../types/library";
const DeleteCollectionModal = ({
  onExit,
  refetch,
  collection,
}: {
  onExit: () => void;
  refetch: () => void;
  collection: TCollectionListDetailRes | null;
}) => {
  const { mutate: deleteCollection } = useDeleteCollection();
  const handleDeleteCollection = () => {
    if (!collection) return;
    deleteCollection(
      { collectionId: collection.collectionId },
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
        <Text style={styles.modalText}>
          {collection?.collectionTitle} 컬렉션을
        </Text>
        <Text style={styles.modalText}>삭제하시겠습니까?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleDeleteCollection();
            }}
          >
            <Text style={[styles.buttonText, { color: Color.Contents.Click }]}>
              삭제
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

export default DeleteCollectionModal;
