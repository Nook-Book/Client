import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SvgProps } from "react-native-svg";
import LibraryIcon from "../../assets/images/icon/Library.svg";
import SearchIcon from "../../assets/images/icon/Search.svg";
import ChallengeIcon from "../../assets/images/icon/Challenge.svg";
import MyIcon from "../../assets/images/icon/MY.svg";
import { Font, Color } from "../../styles/Theme";
import LibraryStackScreen from "./LibraryStackNavigation";
import SearchStackScreen from "./SearchStackNavigation";
import MaPageStackScreen from "./MaPageStackNavigation.tsx";
import ChallengeStackScreen from "./ChallengeStackNavigation";
import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { DetailNavigationProp } from "../../types/detail";

type RootTabParamList = {
  서재: undefined;
  검색: undefined;
  챌린지: undefined;
  마이: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function TabNavigation() {
  const navigation = useNavigation<DetailNavigationProp>();

  React.useEffect(() => {
    const handleDeepLink = async (event: { url: string }) => {
      let { path } = Linking.parse(event.url);
      if (path?.startsWith("book/")) {
        const isbn = path.split("/")[1];
        if (isbn) {
          navigation.navigate("Detail", { isbn });
        }
      }
    };

    const initLinking = async () => {
      const url = await Linking.getInitialURL();
      if (url) {
        handleDeepLink({ url });
      }
    };

    const listener = Linking.addEventListener("url", handleDeepLink);

    initLinking();

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelPosition: "below-icon",
        tabBarActiveTintColor: Color.Contents.Click,
        tabBarInactiveTintColor: Color.Contents.Default,
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: Color.Secondary,
          height: "auto",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          position: "absolute",
          shadowColor: "#A4A4A4",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.25,
          shadowRadius: 10,
          elevation: 10,
          display: "flex",
        },
        tabBarIcon: ({ color }: { color: string }) => {
          let IconComponent: React.FC<SvgProps>;

          switch (route.name) {
            case "서재":
              IconComponent = LibraryIcon;
              break;
            case "검색":
              IconComponent = SearchIcon;
              break;
            case "챌린지":
              IconComponent = ChallengeIcon;
              break;
            case "마이":
              IconComponent = MyIcon;
              break;
            default:
              return null;
          }

          return <IconComponent width={38} height={38} color={color} />;
        },
        tabBarLabelStyle: {
          ...Font.Paragraph.XS,
        },
        tabBarIconStyle: {
          marginTop: 30,
          marginBottom: 17,
        },
      })}
    >
      <Tab.Screen name="서재" component={LibraryStackScreen} />
      <Tab.Screen name="검색" component={SearchStackScreen} />
      <Tab.Screen name="마이" component={MaPageStackScreen} />
      <Tab.Screen name="챌린지" component={ChallengeStackScreen} />
    </Tab.Navigator>
  );
}
