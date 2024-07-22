import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";

import TabNavigation from "./src/components/navBar/TabNavigation";

type RootTabParamList = {
  Library: undefined;
  Search: undefined;
  Challenge: undefined;
  My: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    SCDream6: require("./src/assets/fonts/SCDream6.otf"),
    SCDream5: require("./src/assets/fonts/SCDream5.otf"),
    SCDream4: require("./src/assets/fonts/SCDream4.otf"),
  });
  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
