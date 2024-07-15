import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabNavigation from "./src/components/navBar/TabNavigation";

type RootTabParamList = {
  Library: undefined;
  Search: undefined;
  Challenge: undefined;
  My: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
