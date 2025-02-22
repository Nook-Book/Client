import React, { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Text,
  View,
  Platform,
  Keyboard,
  Pressable,
} from "react-native";
import { styles } from "../../styles/detail/WritePageStyle";
import { markdownStyle } from "../../styles/markdown/MarkdownStyle";
import Markdown from "react-native-markdown-display";
import WriteHeader from "../../components/header/WriteHeader";
import { Color } from "../../styles/Theme";
import PlusIcon from "../../assets/images/icon/Plus2.svg";
import ImageIcon from "../../assets/images/icon/Image.svg";
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
import TextShapeItem from "../../components/write/TextShapeItem";
import { RenderRules } from "../../styles/markdown/RenderRules";
import WarningModal from "../../components/modal/WarningModal";
import EditModal from "../../components/modal/EditModal";
import { postNote } from "../../api/note/postNote";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deleteImage } from "../../api/note/deleteImage";
import { putEditNote } from "../../api/note/putEditNote";

type SelectedMenuType = "" | "Plus" | "Image" | "TextShape" | "Reset";

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

//메뉴 아이템
const menuItem: MenuItemType[] = [
  {
    icon: PlusIcon,
    type: "Plus",
  },
  {
    icon: ImageIcon,
    type: "Image",
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

const WritePage = ({ navigation, route }: { navigation: any; route: any }) => {
  const bookId = route?.params?.bookId;
  const { noteId, title, content } = route.params;

  const [isWarningModal, setIsWarningModal] = useState(false); //색상 변경 주의 모달
  const [isEditModal, setIsEditModal] = useState(false); //작성 취소 시 경고 모달

  const markdownInputRef = useRef<TextInput>(null); //마크다운 입력 필드 참조
  const [isWriteView, setIsWriteView] = useState(true); //글쓰기 뷰
  const [titleText, setTitleText] = useState(title || ""); //제목
  const [markdownText, setMarkdownText] = useState(content || ""); //내용
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
  const [addImageList, setAddImageList] = useState<string[]>([]); //추가한 이미지 리스트

  //키보드 이벤트
  useEffect(() => {
    //키보드가 나타날 때 호출되는 이벤트 리스너
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeybored(true);
        if (selectedShapeMenu.TextColor) {
          setSelectedShapeMenu((prev) => ({
            ...prev,
            TextColor: false,
          }));
        }
      }
    );

    //키보드가 사라질 때 호출되는 이벤트 리스너
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeybored(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

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

  //사용되지 않는 이미지 삭제 함수
  const deleteUnusedImages = async (markdownText: string) => {
    try {
      for (const imageUrl of addImageList) {
        if (!markdownText.includes(imageUrl)) {
          await deleteImage(imageUrl);
        }
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  //이미지 삭제 함수
  const deleteImages = async () => {
    try {
      for (const imageUrl of addImageList) {
        await deleteImage(imageUrl);
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  //독서 기록 저장 함수
  const handleSaveNote = async () => {
    try {
      await deleteUnusedImages(markdownText);

      const response = await postNote({
        bookId: bookId,
        title: titleText,
        content: markdownText,
      });
      if (response.check) {
        navigation.goBack();
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  //독서 기록 수정 함수
  const handleEditNote = async () => {
    try {
      await deleteUnusedImages(markdownText);

      const response = await putEditNote(noteId, {
        title: titleText,
        content: markdownText,
      });
      if (response.check) {
        navigation.goBack();
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  return (
    <View style={styles.container}>
      <WriteHeader
        isText={
          titleText.length > 0 &&
          (title !== titleText || content !== markdownText)
        }
        onCheckPress={() =>
          bookId === undefined ? handleEditNote() : handleSaveNote()
        }
        onCancelPress={() => {
          const isEdit =
            noteId === undefined
              ? titleText.length > 0 || markdownText.length > 0
              : title !== titleText || content !== markdownText;

          isEdit ? setIsEditModal(true) : navigation.goBack();
        }}
      />
      <View style={styles.tabViewWrap}>
        <Pressable
          style={[
            styles.tabWrap,
            {
              borderColor: isWriteView ? Color.Contents.Click : "#DBDBDB",
            },
          ]}
          onPress={() => setIsWriteView(true)}
        >
          <Text
            style={[
              styles.tabText,
              {
                color: isWriteView ? Color.Contents.Click : "#DBDBDB",
              },
            ]}
          >
            글쓰기
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.tabWrap,
            {
              borderColor: isWriteView ? "#DBDBDB" : Color.Contents.Click,
            },
          ]}
          onPress={() => setIsWriteView(false)}
        >
          <Text
            style={[
              styles.tabText,
              {
                color: isWriteView ? "#DBDBDB" : Color.Contents.Click,
              },
            ]}
          >
            미리보기
          </Text>
        </Pressable>
      </View>
      <KeyboardAvoidingView
        style={styles.contentContainer}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={{ marginHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="never"
          keyboardDismissMode="none"
        >
          {isWriteView ? (
            <>
              <TextInput
                style={styles.titleInputText}
                placeholder="제목을 입력해주세요"
                value={titleText}
                onChangeText={setTitleText}
                placeholderTextColor={Color.Typo.Tertiary}
                onFocus={() => setIsItemView(false)}
              />
              <TextInput
                style={styles.contentText}
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
                scrollEnabled={false}
              />
            </>
          ) : (
            <>
              <Text style={styles.titleText}>{titleText}</Text>
              <Markdown style={markdownStyle} rules={RenderRules}>
                {String(markdownText)}
              </Markdown>
            </>
          )}
        </ScrollView>
        <View style={styles.fixedWrap}>
          {(isKeybored || isItemView) && (
            <View style={styles.menuWrap}>
              <View style={styles.menuView}>
                {selectedMenu === "TextShape"
                  ? shapeMenuItem.map((data, index) => {
                      return (
                        <Pressable
                          key={index}
                          onPress={() => {
                            setSelectedShapeMenu((prevState) => {
                              const newState = { ...prevState };
                              newState[data.type] = !newState[data.type];
                              return newState;
                            });
                            if (data.type === "TextColor") {
                              if (!selectedShapeMenu.TextColor) {
                                Keyboard.dismiss();
                                setIsKeybored(false);
                                setIsItemView(true);
                              } else {
                                markdownInputRef.current?.focus();
                                setIsKeybored(true);
                              }
                            }
                            if (data.type === "Back") {
                              setSelectedMenu("");
                              markdownInputRef.current?.focus();
                              setIsKeybored(true);
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
                        >
                          <data.icon
                            color={
                              selectedShapeMenu[data.type]
                                ? Color.Contents.Click
                                : Color.Contents.Icon
                            }
                          />
                        </Pressable>
                      );
                    })
                  : menuItem.map((data, index) => {
                      return (
                        <Pressable
                          key={index}
                          onPress={async () => {
                            if (data.type === "Reset") {
                              handleReset();
                            } else if (data.type === "TextShape") {
                              const isFirst = await AsyncStorage.getItem(
                                "isFirst"
                              );
                              if (isFirst === null) {
                                setIsWarningModal(true);
                                await AsyncStorage.setItem("isFirst", "true");
                              }
                              setSelectedMenu(data.type);
                              Keyboard.dismiss();
                              setIsItemView(true);
                              setIsKeybored(false);
                              setSelectedShapeMenu((prev) => ({
                                ...prev,
                                TextColor: true,
                              }));
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
                        >
                          <data.icon
                            color={
                              selectedMenu === data.type
                                ? Color.Contents.Click
                                : Color.Contents.Icon
                            }
                          />
                        </Pressable>
                      );
                    })}
              </View>
              <View style={styles.keyboredWrap}>
                {isKeybored ? (
                  <Pressable
                    onPress={() => {
                      Keyboard.dismiss();
                      setIsItemView(false);
                      setIsKeybored(!isKeybored);
                    }}
                  >
                    <KeyboredIcon />
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => {
                      setSelectedMenu("");
                      markdownInputRef.current?.focus();
                      setIsItemView(false);
                      setIsKeybored(!isKeybored);
                    }}
                  >
                    <KeyboredClickIcon />
                  </Pressable>
                )}
              </View>
            </View>
          )}
          {isItemView &&
            (selectedMenu === "Plus" ? (
              <PlusItem handleTextInsert={handleTextInsert} />
            ) : selectedMenu === "Image" ? (
              <ImageItem
                handleTextInsert={handleTextInsert}
                setAddImageList={setAddImageList}
              />
            ) : selectedMenu === "TextShape" ? (
              <TextShapeItem handleColorChange={handleColorChange} />
            ) : (
              <View></View>
            ))}
        </View>
      </KeyboardAvoidingView>
      <WarningModal
        visible={isWarningModal}
        onClose={() => setIsWarningModal(false)}
      />
      <EditModal
        visible={isEditModal}
        text={"작성한 사항이 저장되지 않았습니다.\n취소하시겠습니까?"}
        rightText="취소"
        onClose={() => setIsEditModal(false)}
        onComplate={() => {
          deleteImages();
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default WritePage;
