import H1Icon from "../../assets/images/write/H1.svg";
import H2Icon from "../../assets/images/write/H2.svg";
import H3Icon from "../../assets/images/write/H3.svg";
import BulletIcon from "../../assets/images/write/Bullet.svg";
import NumberIcon from "../../assets/images/write/Number.svg";
import DividerIcon from "../../assets/images/write/Divider.svg";
import CalloutIcon from "../../assets/images/write/Callout.svg";
import { SvgProps } from "react-native-svg";
import { View, Text, FlatList, Pressable } from "react-native";
import { styles } from "../../styles/write/PlusItemStyle";

type PlusItemsType = {
  type: string;
  icon: React.FC<SvgProps>;
  text: string;
};

const PlusItem = ({
  handleTextInsert,
}: {
  handleTextInsert: (type: string) => void;
}) => {
  const PlusItems: PlusItemsType[] = [
    {
      type: "# ",
      icon: H1Icon,
      text: "제목1",
    },
    {
      type: "## ",
      icon: H2Icon,
      text: "제목2",
    },
    {
      type: "### ",
      icon: H3Icon,
      text: "제목3",
    },
    {
      type: "+ ",
      icon: BulletIcon,
      text: "글머리 기호 목록",
    },
    {
      type: "1. ",
      icon: NumberIcon,
      text: "번호 매기기 목록",
    },
    {
      type: "---\n",
      icon: DividerIcon,
      text: "구분선",
    },
    {
      type: "> ",
      icon: CalloutIcon,
      text: "콜아웃",
    },
  ];

  const renderItem = ({ item }: { item: PlusItemsType }) => {
    return (
      <Pressable
        style={[styles.boxWrap]}
        onPress={() => handleTextInsert(item.type)}
      >
        <item.icon style={{ marginRight: 8 }} />
        <Text style={styles.itemText}>{item.text}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.itemWrap}>
      <FlatList
        data={PlusItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PlusItem;
