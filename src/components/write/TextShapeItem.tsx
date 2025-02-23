import { View, Text, FlatList, Pressable, useWindowDimensions } from "react-native";
import { getStyles } from "../../styles/write/TextShapeItemStyle";
import { Font } from "../../styles/Theme";
import {
  colorMap,
  backgroundColorMap,
} from "../../styles/markdown/RenderRules";

type TextColorItemsType = {
  type: "color";
  style: string;
  text: string;
};

type TextBackItemsType = {
  type: "background";
  style: string;
  text: string;
};

type TextShapeItemType = TextColorItemsType | TextBackItemsType;

const TextShapeItem = ({
  handleColorChange,
}: {
  handleColorChange: (type: string) => void;
}) => {
  const { width: windowWidth } = useWindowDimensions();

  const styles = getStyles(windowWidth);

  const items: TextShapeItemType[] = [
    { type: "color", style: "", text: "텍스트 색" },
    { type: "color", style: "", text: "" },
    { type: "color", style: "A", text: "기본" },
    { type: "color", style: "D", text: "회색" },
    { type: "color", style: "R", text: "빨간색" },
    { type: "color", style: "O", text: "주황색" },
    { type: "color", style: "Y", text: "노란색" },
    { type: "color", style: "G", text: "초록색" },
    { type: "color", style: "B", text: "파란색" },
    { type: "color", style: "P", text: "보라색" },
    { type: "background", style: "", text: "배경 색" },
    { type: "background", style: "", text: "" },
    { type: "background", style: "A", text: "기본 배경" },
    { type: "background", style: "D", text: "회색 배경" },
    { type: "background", style: "R", text: "빨간색 배경" },
    { type: "background", style: "O", text: "주황색 배경" },
    { type: "background", style: "Y", text: "노란색 배경" },
    { type: "background", style: "G", text: "초록색 배경" },
    { type: "background", style: "B", text: "파란색 배경" },
    { type: "background", style: "P", text: "보라색 배경" },
  ];

  const renderItem = ({ item }: { item: TextShapeItemType }) => {
    if (item.type === "color") {
      if (item.style === "") {
        return <Text style={styles.headText}>{item.text}</Text>;
      }

      return (
        <Pressable
          style={styles.boxWrap}
          onPress={() => handleColorChange("T" + item.style)}
        >
          <View style={styles.leftWrap}>
            <Text style={[{ color: colorMap[item.style] }, Font.Label.Text]}>
              가
            </Text>
          </View>
          <Text style={styles.itemText}>{item.text}</Text>
        </Pressable>
      );
    } else if (item.type === "background") {
      if (item.style === "") {
        return (
          <Text style={[styles.headText, { paddingTop: 16 }]}>{item.text}</Text>
        );
      }

      return (
        <Pressable
          style={styles.boxWrap}
          onPress={() => handleColorChange("B" + item.style)}
        >
          <View style={styles.leftWrap}>
            <View
              style={[
                { backgroundColor: backgroundColorMap[item.style] },
                styles.backWrap,
              ]}
            ></View>
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
