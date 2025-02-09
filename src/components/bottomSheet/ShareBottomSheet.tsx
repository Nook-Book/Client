import { Alert, View } from "react-native";
import { styles } from "../../styles/bottomSheet/BottomSheetStyle";
import KakaoIcon from "../../assets/images/share/Kakao.svg";
import InstagramIcon from "../../assets/images/share/Instagram.svg";
import LinkIcon from "../../assets/images/share/Link.svg";
import BottomSheetItem from "./BottomSheetItem";
import ShareCard from "./ShareCard";
import BottomSheetTitle from "./BottomSheetTitle";
import * as Linking from "expo-linking";
import * as Clipboard from "expo-clipboard";
import * as Sharing from "expo-sharing";

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
      return `https://nookbook.com/book/${isbn}`;
    }
  };

  const handleShare = async () => {
    const link = generateDeepLink();

    try {
      await Sharing.shareAsync(link, {
        dialogTitle: "NookBook",
      });
    } catch (error) {
      console.error("공유 실패:", error);
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
          Icon={<KakaoIcon />}
          leftText="카카오톡 공유하기"
          rightText=""
          onPress={handleShare}
        />
        <BottomSheetItem
          Icon={<InstagramIcon />}
          leftText="인스타그램 공유하기"
          rightText=""
          onPress={handleShare}
        />
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
