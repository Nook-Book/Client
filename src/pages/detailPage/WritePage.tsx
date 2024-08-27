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
import { markdownStyle } from "../../styles/markdown/MarkdownStyle";
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
import BackIcon from "../../assets/images/icon/Back2.svg";
import TextColorIcon from "../../assets/images/icon/TextColor.svg";
import BoldIcon from "../../assets/images/icon/Bold.svg";
import ItalicIcon from "../../assets/images/icon/Italic.svg";
import UnderlineIcon from "../../assets/images/icon/Underline.svg";
import CancellineIcon from "../../assets/images/icon/Cancelline.svg";
import { SvgProps } from "react-native-svg";
import PlusItem from "../../components/write/PlusItem";
import ImageItem from "../../components/write/ImageItem";
import TextImportItem from "../../components/write/TextImportItem";
import TextShapeItem from "../../components/write/TextShapeItem";
import { RenderRules } from "../../styles/markdown/RenderRules";

type SelectedMenuType =
  | ""
  | "Plus"
  | "Change"
  | "Image"
  | "TextImport"
  | "TextShape"
  | "Reset";

type SelectedShapeMenuType =
  | "Back"
  | "TextColor"
  | "Bold"
  | "Italic"
  | "Underline"
  | "Cancelline";

type MenuItemType = {
  icon: React.FC<SvgProps>;
  type: SelectedMenuType;
};

type ShapeMenuItemType = {
  icon: React.FC<SvgProps>;
  type: SelectedShapeMenuType;
};

type SelectedShapeMenuState = {
  [key in SelectedShapeMenuType]: boolean;
};

const WritePage = ({ navigation }: { navigation: any }) => {
  const markdownInputRef = useRef<TextInput>(null); //마크다운 입력 필드 참조
  const [titleText, setTitleText] = useState(""); //제목
  const [markdownText, setMarkdownText] = useState(``); //내용
  const [isKeybored, setIsKeybored] = useState(false); //키보드 상태
  const [isItemView, setIsItemView] = useState(false); //아이템뷰 상태
  const [selectedMenu, setSelectedMenu] = useState<SelectedMenuType>(""); //선택된 메뉴
  const [selectedShapeMenu, setSelectedShapeMenu] =
    useState<SelectedShapeMenuState>({
      Back: false,
      TextColor: true,
      Bold: false,
      Italic: false,
      Underline: false,
      Cancelline: false,
    }); //Shape 선택된 메뉴
  const [history, setHistory] = useState<{ title: string; content: string }[]>(
    []
  ); //작성 기록 상태
  const [cursorPosition, setCursorPosition] = useState(0); //커서 위치 상태
  const [selection, setSelection] = useState<{ start: number; end: number }>({
    start: 0,
    end: 0,
  }); //선택된 텍스트 상태

  //메뉴 아이템
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

  //Shape 메뉴 아이템
  const shapeMenuItem: ShapeMenuItemType[] = [
    {
      icon: BackIcon,
      type: "Back",
    },
    {
      icon: TextColorIcon,
      type: "TextColor",
    },
    {
      icon: BoldIcon,
      type: "Bold",
    },
    {
      icon: ItalicIcon,
      type: "Italic",
    },
    {
      icon: UnderlineIcon,
      type: "Underline",
    },
    {
      icon: CancellineIcon,
      type: "Cancelline",
    },
  ];

  //색상 변경 함수
  const handleColorChange = (color: string) => {
    const start = selection.start;
    const end = selection.end;

    if (start !== end) {
      const selectedText = markdownText.slice(start, end);
      const beforeText = markdownText.slice(0, start);
      const afterText = markdownText.slice(end);

      const textRegex = /T[A-Z]\[(.*?)\]/;
      const backgroundRegex = /B[A-Z]\[(.*?)\]/;

      let newText;

      if (color.startsWith("T")) {
        if (color.slice(-1) === "A") {
          if (textRegex.test(selectedText)) {
            newText = selectedText.replace(/T[A-Z]\[/, "").slice(0, -1);
          } else {
            newText = selectedText;
          }
        } else {
          if (textRegex.test(selectedText)) {
            newText = selectedText.replace(/T[A-Z]/, color);
          } else {
            newText = `${color}[${selectedText}]`;
          }
        }
      } else if (color.startsWith("B")) {
        if (color.slice(-1) === "A") {
          if (backgroundRegex.test(selectedText)) {
            newText = selectedText.replace(/B[A-Z]\[/, "").slice(0, -1);
          } else {
            newText = selectedText;
          }
        } else {
          if (backgroundRegex.test(selectedText)) {
            newText = selectedText.replace(/B[A-Z]/, color);
          } else {
            newText = `${color}[${selectedText}]`;
          }
        }
      }

      saveHistoryState();
      setMarkdownText(`${beforeText}${newText}${afterText}`);
      setCursorPosition(end);
    }

    setSelectedShapeMenu((prevState) => ({
      ...prevState,
      TextColor: false,
    }));

    markdownInputRef.current?.focus();
  };

  //선택 영역 변경 함수
  const handleSelectionChange = (event: any) => {
    const { start, end } = event.nativeEvent.selection;
    setSelection({ start, end });
    setCursorPosition(start);
    updateShapeMenuBasedOnSelection(start, end);
  };

  //선택된 텍스트에 따라 Shape 메뉴 업데이트 함수
  const updateShapeMenuBasedOnSelection = (start: number, end: number) => {
    const selectedText = markdownText.slice(start, end);

    const isBold = selectedText.startsWith("**") && selectedText.endsWith("**");
    const isItalic = selectedText.startsWith("_") && selectedText.endsWith("_");
    const isUnderline =
      selectedText.startsWith("`") && selectedText.endsWith("`");
    const isCancelline =
      selectedText.startsWith("~~") && selectedText.endsWith("~~");

    setSelectedShapeMenu((prevState) => ({
      ...prevState,
      Bold: isBold,
      Italic: isItalic,
      Underline: isUnderline,
      Cancelline: isCancelline,
    }));
  };

  //텍스트 삽입 함수
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

    saveHistoryState();
    setMarkdownText(newText);
    setCursorPosition(
      cursorPosition + (isCurrentLineNotEmpty ? 1 : 0) + textToInsert.length
    );

    setSelectedMenu("");
    markdownInputRef.current?.focus();
  };

  //텍스트 스타일 적용 함수
  const handleTextType = (text: string, type: boolean) => {
    const start = selection.start;
    const end = selection.end;

    const selectedText = markdownText.slice(start, end);
    const beforeText = markdownText.slice(0, start);
    const afterText = markdownText.slice(end);

    let newText: string;

    if (type) {
      newText = `${beforeText}${text}${selectedText}${text}${afterText}`;
    } else {
      const newSelectedText = selectedText.replaceAll(text, "");
      newText = `${beforeText}${newSelectedText}${afterText}`;
    }
    saveHistoryState();
    setMarkdownText(newText);
    updateShapeMenuBasedOnSelection(start, end);
    setSelectedShapeMenu((prevState) => ({
      ...prevState,
      TextColor: false,
    }));
  };

  //기록 상태 저장 함수
  const saveHistoryState = () => {
    setHistory((prevHistory) => [
      ...prevHistory,
      { title: titleText, content: markdownText },
    ]);
  };

  //기록 뒤로가기 함수
  const handleReset = () => {
    if (history.length > 0) {
      const lastState = history[history.length - 1];
      setTitleText(lastState.title);
      setMarkdownText(lastState.content);
      setHistory(history.slice(0, -1));
    }
  };

  return (
    <View style={styles.container}>
      <WriteHeader
        navigation={navigation}
        isText={titleText.length > 0 || markdownText.length > 0}
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
            onChangeText={(text) => {
              saveHistoryState();
              setMarkdownText(text);
            }}
            placeholderTextColor={Color.Typo.Tertiary}
            onFocus={() => {
              setIsKeybored(true);
              setIsItemView(false);
            }}
            onSelectionChange={handleSelectionChange}
            multiline
          />
          <Markdown style={markdownStyle} rules={RenderRules}>
            {markdownText}
          </Markdown>
        </ScrollView>
        <View style={styles.fixedWrap}>
          {(isKeybored || isItemView) && (
            <View style={styles.menuWrap}>
              <View style={styles.menuView}>
                {selectedMenu === "TextShape"
                  ? shapeMenuItem.map((data, index) => {
                      return (
                        <data.icon
                          key={index}
                          color={
                            selectedShapeMenu[data.type]
                              ? Color.Contents.Click
                              : Color.Contents.Icon
                          }
                          onPress={() => {
                            setSelectedShapeMenu((prevState) => {
                              const newState = { ...prevState };
                              newState[data.type] = !newState[data.type];
                              return newState;
                            });
                            if (data.type === "TextColor") {
                              if (!selectedShapeMenu.TextColor) {
                                Keyboard.dismiss();
                                setIsItemView(true);
                                setIsKeybored(false);
                              } else {
                                markdownInputRef.current?.focus();
                              }
                            }
                            if (data.type === "Back") {
                              setSelectedMenu("");
                            }
                            if (data.type === "Bold") {
                              if (!selectedShapeMenu.Bold) {
                                handleTextType("**", true);
                              } else {
                                handleTextType("**", false);
                              }
                            }
                            if (data.type === "Italic") {
                              if (!selectedShapeMenu.Italic) {
                                handleTextType("_", true);
                              } else {
                                handleTextType("_", false);
                              }
                            }
                            if (data.type === "Underline") {
                              if (!selectedShapeMenu.Underline) {
                                handleTextType("`", true);
                              } else {
                                handleTextType("`", false);
                              }
                            }
                            if (data.type === "Cancelline") {
                              if (!selectedShapeMenu.Cancelline) {
                                handleTextType("~~", true);
                              } else {
                                handleTextType("~~", false);
                              }
                            }
                          }}
                        />
                      );
                    })
                  : menuItem.map((data, index) => {
                      return (
                        <data.icon
                          key={index}
                          color={
                            selectedMenu === data.type
                              ? Color.Contents.Click
                              : Color.Contents.Icon
                          }
                          onPress={() => {
                            if (data.type === "Reset") {
                              handleReset();
                            } else if (selectedMenu === data.type) {
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
                      setSelectedMenu("");
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
              <ImageItem handleTextInsert={handleTextInsert} />
            ) : selectedMenu === "TextImport" ? (
              <TextImportItem handleTextInsert={handleTextInsert} />
            ) : selectedMenu === "TextShape" ? (
              <TextShapeItem handleColorChange={handleColorChange} />
            ) : (
              <TextShapeItem handleColorChange={handleColorChange} />
            ))}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default WritePage;
