import { View } from "react-native";
import { styles } from "../../styles/bottomSheet/BottomSheetStyle";
import KakaoIcon from "../../assets/images/share/Kakao.svg";
import InstagramIcon from "../../assets/images/share/Instagram.svg";
import LinkIcon from "../../assets/images/share/Link.svg";
import BottomSheetItem from "./BottomSheetItem";
import ShareCard from "./ShareCard";
import BottomSheetTitle from "./BottomSheetTitle";

const ShareBottomSheet = ({ onClose }: { onClose: () => void }) => {
  const handleShareKakao = () => {
    // 카카오톡 공유 로직
    console.log("카카오톡 공유하기");
  };

  const handleShareInstagram = () => {
    // 인스타그램 공유 로직
    console.log("인스타그램 공유하기");
  };

  const handleCopyLink = () => {
    // 링크 복사 로직
    console.log("링크 복사하기");
  };

  return (
    <View style={styles.container}>
      <ShareCard />
      <View style={styles.bottom}>
        <BottomSheetTitle text="도서 공유" onClose={onClose} />
        <BottomSheetItem
          Icon={<KakaoIcon />}
          leftText="카카오톡 공유하기"
          rightText=""
          onPress={handleShareKakao}
        />
        <BottomSheetItem
          Icon={<InstagramIcon />}
          leftText="인스타그램 공유하기"
          rightText=""
          onPress={handleShareInstagram}
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
