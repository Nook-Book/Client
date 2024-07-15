import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LibraryPage from "../../pages/libraryPage/LibraryPage";
import SearchPage from "../../pages/searchPage/SearchPage";
import ChallengePage from "../../pages/challengePage/ChallengePage";
import MyPage from "../../pages/myPage/MyPage";

type RootTabParamList = {
  서재: undefined;
  검색: undefined;
  챌린지: undefined;
  마이: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "below-icon",
        tabBarActiveTintColor: "#397CC0",
        headerShown: false,
      }}
    >
      <Tab.Screen name="서재" component={LibraryPage} />
      <Tab.Screen name="검색" component={SearchPage} />
      <Tab.Screen name="챌린지" component={ChallengePage} />
      <Tab.Screen name="마이" component={MyPage} />
    </Tab.Navigator>
  );
}
