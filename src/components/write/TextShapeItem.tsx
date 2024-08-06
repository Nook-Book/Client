import { View, Text, FlatList, Pressable } from "react-native";
import { styles } from "../../styles/write/TextShapeItemStyle";
import { Font } from "../../styles/Theme";

type TextColorItemsType = {
  type: "color";
  style: { color: string };
  text: string;
};

type TextBackItemsType = {
  type: "background";
  style: { backgroundColor: string };
  text: string;
};

type TextShapeItemType = TextColorItemsType | TextBackItemsType;

const TextShapeItem = () => {
  const items: TextShapeItemType[] = [
    { type: "color", style: { color: "" }, text: "텍스트 색" },
    { type: "color", style: { color: "" }, text: "" },
    { type: "color", style: { color: "#272D34" }, text: "기본" },
    { type: "color", style: { color: "#838383" }, text: "회색" },
    { type: "color", style: { color: "#DF1515" }, text: "빨간색" },
    { type: "color", style: { color: "#DF5E15" }, text: "주황색" },
    { type: "color", style: { color: "#DFB315" }, text: "노란색" },
    { type: "color", style: { color: "#43AE1D" }, text: "초록색" },
    { type: "color", style: { color: "#2081EC" }, text: "파란색" },
    { type: "color", style: { color: "#7F35BA" }, text: "보라색" },
    {
      type: "background",
      style: { backgroundColor: "" },
      text: "배경 색",
    },
    {
      type: "background",
      style: { backgroundColor: "" },
      text: "",
    },
    {
      type: "background",
      style: { backgroundColor: "rgba(255, 255, 255, 0)" },
      text: "기본 배경",
    },
    {
      type: "background",
      style: { backgroundColor: "rgba(131, 131, 131, 0.15)" },
      text: "회색 배경",
    },
    {
      type: "background",
      style: { backgroundColor: "rgba(223, 21, 21, 0.15)" },
      text: "빨간색 배경",
    },
    {
      type: "background",
      style: { backgroundColor: "rgba(223, 94, 21, 0.15)" },
      text: "주황색 배경",
    },
    {
      type: "background",
      style: { backgroundColor: "rgba(223, 179, 21, 0.15)" },
      text: "노란색 배경",
    },
    {
      type: "background",
      style: { backgroundColor: "rgba(67, 174, 29, 0.15)" },
      text: "초록색 배경",
    },
    {
      type: "background",
      style: { backgroundColor: "rgba(32, 129, 236, 0.15)" },
      text: "파란색 배경",
    },
    {
      type: "background",
      style: { backgroundColor: "rgba(127, 53, 186, 0.15)" },
      text: "보라색 배경",
    },
  ];

  const renderItem = ({ item }: { item: TextShapeItemType }) => {
    if (item.type === "color") {
      if (item.style.color === "") {
        return <Text style={styles.headText}>{item.text}</Text>;
      }

      return (
        <Pressable style={styles.boxWrap}>
          <View style={styles.leftWrap}>
            <Text style={[item.style, Font.Label.Text]}>가</Text>
          </View>
          <Text style={styles.itemText}>{item.text}</Text>
        </Pressable>
      );
    } else if (item.type === "background") {
      if (item.style.backgroundColor === "") {
        return (
          <Text style={[styles.headText, { paddingTop: 16 }]}>{item.text}</Text>
        );
      }

      return (
        <Pressable style={styles.boxWrap}>
          <View style={styles.leftWrap}>
            <View style={[item.style, styles.backWrap]}></View>
          </View>
          <Text style={styles.itemText}>{item.text}</Text>
        </Pressable>
      );
    }
    return null;
  };

  return (
    <View style={styles.itemWrap}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TextShapeItem;
