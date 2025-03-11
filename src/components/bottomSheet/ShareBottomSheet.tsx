import { Alert, View } from "react-native";
import { styles } from "../../styles/bottomSheet/BottomSheetStyle";
import LinkIcon from "../../assets/images/share/Link.svg";
import BottomSheetItem from "./BottomSheetItem";
import ShareCard from "./ShareCard";
import BottomSheetTitle from "./BottomSheetTitle";
import * as Linking from "expo-linking";
import * as Clipboard from "expo-clipboard";

const ShareBottomSheet = ({
  isbn,
  cover,
  title,
  author,
  onClose,
}: {
  isbn: string;
  cover: string;
  title: string;
  author: string;
  onClose: () => void;
}) => {
  const generateDeepLink = () => {
    if (__DEV__) {
      return Linking.createURL(`/book/${isbn}`);
    } else {
      return `/book/${isbn}`;
    }
  };

  const handleCopyLink = () => {
    const link = generateDeepLink();
    Clipboard.setStringAsync(link);
    Alert.alert("링크가 복사되었습니다!");
  };

  return (
    <View style={styles.container}>
      <ShareCard cover={cover} title={title} author={author} />
      <View style={styles.bottom}>
        <BottomSheetTitle text="도서 공유" onClose={onClose} />
        <BottomSheetItem
          Icon={<LinkIcon />}
          leftText="링크 복사하기"
          rightText=""
          onPress={handleCopyLink}
        />
      </View>
    </View>
  );
};

export default ShareBottomSheet;
