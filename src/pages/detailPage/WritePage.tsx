import React, { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  View,
  Platform,
  Keyboard,
  Text,
  FlatList,
  ViewStyle,
} from "react-native";
import { styles } from "../../styles/detail/WritePageStyle";
import Markdown from "react-native-markdown-display";
import WriteHeader from "../../components/header/WriteHeader";
import { Color } from "../../styles/Theme";
import PlusIcon from "../../assets/images/icon/Plus2.svg";
import ChangeIcon from "../../assets/images/icon/Change.svg";
import ImageIcon from "../../assets/images/icon/Image.svg";
import TextImportIcon from "../../assets/images/icon/TextImport.svg";
import TextShapeIcon from "../../assets/images/icon/TextShape.svg";
import ResetIcon from "../../assets/images/icon/Reset.svg";
import KeyboredIcon from "../../assets/images/icon/Keybored.svg";
import KeyboredClickIcon from "../../assets/images/icon/KeyboredClick.svg";
import { SvgProps } from "react-native-svg";
import H1Icon from "../../assets/images/write/H1.svg";
import H2Icon from "../../assets/images/write/H2.svg";
import H3Icon from "../../assets/images/write/H3.svg";
import BulletIcon from "../../assets/images/write/Bullet.svg";
import NumberIcon from "../../assets/images/write/Number.svg";
import QuotationIcon from "../../assets/images/write/Quotation.svg";
import DividerIcon from "../../assets/images/write/Divider.svg";
import CalloutIcon from "../../assets/images/write/Callout.svg";

type SelectedMenuType =
  | "Plus"
  | "Change"
  | "Image"
  | "TextImport"
  | "TextShape"
  | "Reset";

type MenuItemType = {
  icon: React.FC<SvgProps>;
  type: SelectedMenuType;
};

type typeItemType = {
  icon?: React.FC<SvgProps>;
  text: string;
  type: string;
};

const renderItem = ({
  item,
  numColumns,
}: {
  item: typeItemType;
  numColumns: 1 | 2;
}) => {
  const itemStyle: ViewStyle = {
    width: numColumns === 1 ? 358 : 171,
    justifyContent: numColumns === 1 ? "center" : "flex-start",
  };

  return (
    <View style={[styles.boxWrap, itemStyle]}>
      {item.icon && <item.icon style={{ marginRight: 8 }} />}
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

const WritePage = ({ navigation }: { navigation: any }) => {
  const markdownInputRef = useRef<TextInput>(null);
  const [titleText, setTitleText] = useState("");
  const [markdownText, setMarkdownText] = useState(``);
  const [isKeybored, setIsKeybored] = useState(false);
  const [isItemView, setIsItemView] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<SelectedMenuType>("Plus");

  const menuItem: MenuItemType[] = [
    {
      icon: PlusIcon,
      type: "Plus",
    },
    {
      icon: ChangeIcon,
      type: "Change",
    },
    {
      icon: ImageIcon,
      type: "Image",
    },
    {
      icon: TextImportIcon,
      type: "TextImport",
    },
    {
      icon: TextShapeIcon,
      type: "TextShape",
    },
    {
      icon: ResetIcon,
      type: "Reset",
    },
  ];

  const typeItem: Record<SelectedMenuType, typeItemType[]> = {
    Plus: [
      {
        type: "1",
        icon: H1Icon,
        text: "제목1",
      },
      {
        type: "1",
        icon: H2Icon,
        text: "제목2",
      },
      {
        type: "1",
        icon: H3Icon,
        text: "제목3",
      },
      {
        type: "1",
        icon: BulletIcon,
        text: "글머리 기호 목록",
      },
      {
        type: "1",
        icon: NumberIcon,
        text: "번호 매기기 목록",
      },
      {
        type: "1",
        icon: QuotationIcon,
        text: "인용",
      },
      {
        type: "1",
        icon: DividerIcon,
        text: "구분선",
      },
      {
        type: "1",
        icon: CalloutIcon,
        text: "콜아웃",
      },
    ],
    Change: [
      {
        type: "1",
        icon: H1Icon,
        text: "제목1",
      },
      {
        type: "1",
        icon: H2Icon,
        text: "제목1",
      },
      {
        type: "1",
        icon: H3Icon,
        text: "제목1",
      },
      {
        type: "1",
        icon: BulletIcon,
        text: "제목1",
      },
      {
        type: "1",
        icon: NumberIcon,
        text: "제목1",
      },
      {
        type: "1",
        icon: QuotationIcon,
        text: "제목1",
      },
      {
        type: "1",
        icon: DividerIcon,
        text: "제목1",
      },
      {
        type: "1",
        icon: CalloutIcon,
        text: "제목1",
      },
    ],
    Image: [
      {
        type: "1",
        text: "사진 앨범",
      },
      {
        type: "2",
        text: "카메라",
      },
    ],
    TextImport: [
      {
        type: "1",
        text: "카메라로 텍스트 추출",
      },
      {
        type: "2",
        text: "사진첩에서 텍스트 추출",
      },
    ],
    TextShape: [
      {
        type: "1",
        text: "카메라로 텍스트 추출",
      },
      {
        type: "2",
        text: "사진첩에서 텍스트 추출",
      },
    ],
    Reset: [],
  };

  const numColumns =
    selectedMenu === "Image" ||
    selectedMenu === "TextImport" ||
    selectedMenu === "TextShape"
      ? 1
      : 2;

  return (
    <View style={styles.container}>
      <WriteHeader
        navigation={navigation}
        isText={markdownText.length > 0}
        checkClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <KeyboardAvoidingView
        style={styles.contentContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          style={{ marginHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
        >
          <TextInput
            style={styles.titleText}
            placeholder="제목을 입력해주세요"
            value={titleText}
            onChangeText={setTitleText}
            placeholderTextColor={Color.Typo.Tertiary}
            onFocus={() => setIsItemView(false)}
          />
          <TextInput
            ref={markdownInputRef}
            placeholder="탭하여 기록을 시작해보세요."
            value={markdownText}
            onChangeText={setMarkdownText}
            placeholderTextColor={Color.Typo.Tertiary}
            onFocus={() => {
              setIsKeybored(true);
              setIsItemView(false);
            }}
            multiline
          />
          <Markdown>{markdownText}</Markdown>
        </ScrollView>
        <View style={styles.fixedWrap}>
          <View style={styles.menuWrap}>
            <View style={styles.menuView}>
              {menuItem.map((data, index) => {
                return (
                  <data.icon
                    key={index}
                    color={
                      selectedMenu === data.type
                        ? Color.Contents.Click
                        : Color.Contents.Icon
                    }
                    onPress={() => {
                      setSelectedMenu(data.type);
                      Keyboard.dismiss();
                      setIsItemView(true);
                      setIsKeybored(false);
                    }}
                  />
                );
              })}
            </View>
            <View style={styles.keyboredWrap}>
              {isKeybored ? (
                <KeyboredIcon
                  onPress={() => {
                    Keyboard.dismiss();
                    setIsItemView(true);
                    setIsKeybored(!isKeybored);
                  }}
                />
              ) : (
                <KeyboredClickIcon
                  onPress={() => {
                    markdownInputRef.current?.focus();
                    setIsItemView(false);
                    setIsKeybored(!isKeybored);
                  }}
                />
              )}
            </View>
          </View>
          {isItemView && (
            <View style={styles.itemWrap}>
              <FlatList
                key={`flatlist-${numColumns}`}
                data={typeItem[selectedMenu]}
                renderItem={(props) => renderItem({ ...props, numColumns })}
                keyExtractor={(item, index) => index.toString()}
                numColumns={numColumns}
                showsVerticalScrollIndicator={false}
              />
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default WritePage;
