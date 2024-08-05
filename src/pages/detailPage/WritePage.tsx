import React, { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  View,
  Platform,
  Keyboard,
} from "react-native";
import { styles } from "../../styles/detail/WritePageStyle";
import { markdownStyle } from "../../styles/detail/MarkdownStyle";
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
import PlusItem from "../../components/write/PlusItem";
import ImageItem from "../../components/write/ImageItem";

type SelectedMenuType =
  | ""
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

const WritePage = ({ navigation }: { navigation: any }) => {
  const markdownInputRef = useRef<TextInput>(null);
  const [titleText, setTitleText] = useState("");
  const [markdownText, setMarkdownText] = useState(``);
  const [isKeybored, setIsKeybored] = useState(false);
  const [isItemView, setIsItemView] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<SelectedMenuType>("");
  const [cursorPosition, setCursorPosition] = useState(0);

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

  const handleSelectionChange = (event: any) => {
    setCursorPosition(event.nativeEvent.selection.start);
  };

  const handleTextInsert = (textToInsert: string) => {
    const lines = markdownText.split("\n");

    let currentLineIndex = 0;
    let currentLineStart = 0;

    for (let i = 0; i < lines.length; i++) {
      const lineLength = lines[i].length + 1;
      if (cursorPosition <= currentLineStart + lineLength) {
        currentLineIndex = i;
        break;
      }
      currentLineStart += lineLength;
    }

    const isCurrentLineNotEmpty = lines[currentLineIndex].trim().length > 0;
    let newText = markdownText.slice(0, cursorPosition);

    if (isCurrentLineNotEmpty) {
      newText += "\n";
    }

    newText += textToInsert;
    newText += markdownText.slice(cursorPosition);

    setMarkdownText(newText);
    setCursorPosition(
      cursorPosition + (isCurrentLineNotEmpty ? 1 : 0) + textToInsert.length
    );

    markdownInputRef.current?.focus();
  };

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
            onSelectionChange={handleSelectionChange}
            multiline
          />
          <Markdown style={markdownStyle}>{markdownText}</Markdown>
        </ScrollView>
        <View style={styles.fixedWrap}>
          {(isKeybored || isItemView) && (
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
                        if (selectedMenu === data.type) {
                          setSelectedMenu("");
                          markdownInputRef.current?.focus();
                        } else {
                          setSelectedMenu(data.type);
                          Keyboard.dismiss();
                          setIsItemView(true);
                          setIsKeybored(false);
                        }
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
                      setIsItemView(false);
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
          )}
          {isItemView &&
            (selectedMenu === "Plus" || selectedMenu === "Change" ? (
              <PlusItem handleTextInsert={handleTextInsert} />
            ) : selectedMenu === "Image" ? (
              <ImageItem
                handleTextInsert={function (type: string): void {
                  throw new Error("Function not implemented.");
                }}
              />
            ) : (
              <></>
            ))}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default WritePage;
